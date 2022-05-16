package edu.brown.cs.student.db_proxy.GenericDatabase;

import edu.brown.cs.student.db_proxy.PermissionTypes.IPermissions;
import edu.brown.cs.student.db_proxy.PermissionTypes.ReadPermission;
import edu.brown.cs.student.db_proxy.PermissionTypes.ReadWritePermission;
import edu.brown.cs.student.db_proxy.PermissionTypes.WritePermission;
import edu.brown.cs.student.db_proxy.SQLCommands.ISQLCommands;
import edu.brown.cs.student.db_proxy.SQLCommands.SQLSelect;
import edu.brown.cs.student.db_proxy.SQLCommands.SQLTableAlter;
import edu.brown.cs.student.db_proxy.SQLTableFind.ISQLFindTable;
import edu.brown.cs.student.db_proxy.SQLTableFind.SQLAfterCommand;
import edu.brown.cs.student.db_proxy.SQLTableFind.SQLAfterFrom;
import edu.brown.cs.student.db_proxy.SQLTableFind.SQLAfterInto;
import edu.brown.cs.student.db_proxy.SQLTableFind.SQLAfterTable;

import java.util.HashMap;
import java.util.Map;

/**
 * Class which instantiates HashMaps required to proxy and run SQL queries.
 */
public class DatabaseHM {
  /**
   * Method to create a HashMap which maps a command to their execution method.
   *
   * @return A HashMap which contains a command and there respective execution method.
   */
  public Map<String, ISQLCommands> mapCommandRun() {
    Map<String, ISQLCommands> commandRunMap = new HashMap<>();
    SQLSelect sqlS = new SQLSelect();
    SQLTableAlter sqlTA = new SQLTableAlter();
    commandRunMap.put("select", sqlS);
    commandRunMap.put("insert", sqlTA);
    commandRunMap.put("drop", sqlTA);
    commandRunMap.put("update", sqlTA);
    commandRunMap.put("delete", sqlTA);
    commandRunMap.put("alter", sqlTA);
    commandRunMap.put("truncate", sqlTA);
    return commandRunMap;
  }

  /**
   * Method to create a HashMap which maps a command to their method which finds the table
   * associated with the command.
   *
   * @return A HashMap which contains a command and there respective method to find tables.
   */
  public Map<String, ISQLFindTable> findTables() {
    Map<String, ISQLFindTable> permMapFindTable = new HashMap<>();
    permMapFindTable.put("select", new SQLAfterFrom());
    permMapFindTable.put("insert", new SQLAfterInto());
    permMapFindTable.put("drop", new SQLAfterFrom());
    permMapFindTable.put("update", new SQLAfterCommand("update"));
    permMapFindTable.put("delete", new SQLAfterFrom());
    permMapFindTable.put("alter", new SQLAfterTable());
    permMapFindTable.put("join", new SQLAfterCommand("join"));
    permMapFindTable.put("truncate", new SQLAfterTable());
    return permMapFindTable;
  }

  /**
   * Method to create a HashMap which maps a command to their permission.
   *
   * @return A HashMap which contains a command and there respective permission.
   */
  public Map<String, IPermissions> permissionsCommand() {
    Map<String, IPermissions> permMapCommand = new HashMap<>();
    IPermissions r = new ReadPermission();
    IPermissions w = new WritePermission();
    IPermissions rw = new ReadWritePermission();
    permMapCommand.put("select", r);
    permMapCommand.put("insert", w);
    permMapCommand.put("drop", rw);
    permMapCommand.put("update", rw);
    permMapCommand.put("delete", rw);
    permMapCommand.put("alter", rw);
    permMapCommand.put("join", r);
    permMapCommand.put("truncate", rw);
    return permMapCommand;
  }

  /**
   * Method to create a HashMap which maps a table to their permission.
   *
   * @return A HashMap which contains a table and there respective permission.
   */
  public Map<String, IPermissions> permissionsTable() {
    Map<String, IPermissions> permMapTable = new HashMap<>();
    IPermissions r = new ReadPermission();
    IPermissions rw = new ReadWritePermission();
    permMapTable.put("interests", r);
    permMapTable.put("names", r);
    permMapTable.put("skills", r);
    permMapTable.put("traits", r);
    permMapTable.put("horoscopes", rw);
    permMapTable.put("sqlite_sequence", rw);
    permMapTable.put("ta_horoscope", rw);
    permMapTable.put("tas", rw);
    permMapTable.put("zoo", rw);
    return permMapTable;
  }
}
