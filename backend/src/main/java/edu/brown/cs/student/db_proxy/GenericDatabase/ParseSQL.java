package edu.brown.cs.student.db_proxy.GenericDatabase;

import edu.brown.cs.student.db_proxy.Exceptions.CommandNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.TableNotFoundException;
import edu.brown.cs.student.db_proxy.PermissionTypes.IPermissions;
import edu.brown.cs.student.db_proxy.SQLTableFind.ISQLFindTable;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.R;
import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.RW;
import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.W;

/**
 * Class which handles parsing the SQL command to check permissions and to check what the query will
 * do to the database.
 */
public class ParseSQL {
  /**
   * Class which will handle parsing SQL commands.
   *
   * @param sqlQuery the String input of the SQL query
   * @return the parsed form of the SQL Command in list form
   */
  public List<String> parseSQLCommand(String sqlQuery) {
    String sql = sqlQuery.replaceAll("^\"|\"$", "");
    String[] parsedSQL = sql.split(" ");
    for (int i = 0; i < parsedSQL.length; i++) {
      parsedSQL[i] = parsedSQL[i].replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    }
    return Arrays.asList(parsedSQL);
  }

  /**
   * Method to get the first instance of the query which should be a command.
   *
   * @param sqlQ The SQL input in String form
   * @return the first command of an SQL query
   */
  public String getFirstCommand(String sqlQ) {
    List<String> sqlList = parseSQLCommand(sqlQ);
    return sqlList.get(0);
  }

  /**
   * Method to see if the query will alter the table.
   *
   * @param sqlComms       the SQL query
   * @param permMapCommand Hashmap of all the commands and their respective permissions
   * @return true if the command alters the table, false if it does not.
   * @throws CommandNotFoundException thrown when the command is not found.
   */
  public boolean doesTableAlter(String sqlComms, Map<String, IPermissions> permMapCommand)
          throws CommandNotFoundException {
    String command = getFirstCommand(sqlComms);
    if (!permMapCommand.containsKey(command)) {
      System.out.println("ERROR: Command not found");
      throw new CommandNotFoundException("Command not found");
    } else {
      IPermissions ps = permMapCommand.get(command);
      return ps.write();
    }
  }

  /**
   * checks the permission of the command and table to ensure that execution is allowed.
   *
   * @param sqlComms       the SQL query in String form
   * @param permMapTable   a HashMap storing table permissions
   * @param permMapCommand a HashMap storing command permissions
   * @param permMapFind    a  HashMap storing the method class to find the table for a given command
   * @return true or false depending on the permission, null for any errors
   * @throws TableNotFoundException   thrown when the table is not found
   * @throws CommandNotFoundException thrown when the command is not found
   */
  public boolean checkPermission(String sqlComms, Map<String, IPermissions> permMapTable,
                                 Map<String, IPermissions> permMapCommand,
                                 Map<String, ISQLFindTable> permMapFind)
          throws TableNotFoundException, CommandNotFoundException {
    String command;
    List<String> parsedComms = parseSQLCommand(sqlComms);
    command = parsedComms.get(0);
    if (!permMapCommand.containsKey(command)) {
      System.out.println("ERROR: Command not found");
      throw new CommandNotFoundException("Command not found");
    }
    if (!permMapFind.containsKey(command)) {
      System.out.println("ERROR: Command not found");
      throw new CommandNotFoundException("Command not found");
    }
    ISQLFindTable theTable = permMapFind.get(command);
    if (theTable.findTable(parsedComms) == null) {
      System.out.println("ERROR: Table not found");
      throw new TableNotFoundException("Table not found");
    }
    String table = theTable.findTable(parsedComms).toLowerCase();
    if (!permMapTable.containsKey(table)) {
      System.out.println("ERROR: Table not found");
      throw new TableNotFoundException("Table not found");
    }
    IPermissions commpPerm = permMapCommand.get(command);
    IPermissions tablePerm = permMapTable.get(table);
    if (commpPerm.equals(tablePerm.getSymbol()) || (tablePerm.equals(RW) && commpPerm.equals(R))
            || (tablePerm.equals(RW) && commpPerm.equals(W))) {
      for (String s : parsedComms) {
        if (s.equals("join")) {
          String otherTable = permMapFind.get("join").findTable(parsedComms);
          if (permMapTable.containsKey(otherTable)) {
            if (!permMapTable.get(otherTable).equals(R)
                    || permMapTable.get(otherTable).equals(RW)) {
              return false;
            }
          } else {
            System.out.println("ERROR: Table not found");
            throw new TableNotFoundException("Table not found");
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }

}
