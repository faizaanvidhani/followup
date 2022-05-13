package edu.brown.cs.student.db_proxy.GenericDatabase;

import edu.brown.cs.student.db_proxy.Exceptions.CommandNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.TableNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.SQLPermissionDeniedException;
import edu.brown.cs.student.db_proxy.PermissionTypes.IPermissions;
import edu.brown.cs.student.db_proxy.SQLCommands.ISQLCommands;
import edu.brown.cs.student.db_proxy.SQLTableFind.ISQLFindTable;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

/**
 * Class which handles running SQL commands. This will be used  when caching as well.
 */
public class RunSQL {
  private final Connection conn;

  /**
   * Constructor for the RunSQL class.
   *
   * @param conn the connection to the database
   */
  public RunSQL(Connection conn) {
    this.conn = conn;
  }

  /**
   * Method which will run the SQL command after checking permissions.
   *
   * @param inputSQL the String of the SQL Command
   * @return The ResultSet of the SQL query
   * @throws SQLException                 thrown when there is an error with SQL query
   * @throws SQLPermissionDeniedException thrown when the SQL query is not permissible
   * @throws TableNotFoundException       thrown when the table does not exist
   * @throws CommandNotFoundException     thrown when the command does not exist
   */
  public ResultSet runCommand(String inputSQL)
          throws SQLPermissionDeniedException, TableNotFoundException,
          CommandNotFoundException, SQLException {
    DatabaseHM db = new DatabaseHM();
    ParseSQL psql = new ParseSQL();
    Map<String, ISQLCommands> commandRunMap = db.mapCommandRun();
    Map<String, ISQLFindTable> permMapFindTable = db.findTables();
    Map<String, IPermissions> permMapCommand = db.permissionsCommand();
    Map<String, IPermissions> permMapTable = db.permissionsTable();
    boolean value = psql.checkPermission(inputSQL, permMapTable, permMapCommand, permMapFindTable);
    if (!value) {
      System.out.println("ERROR: Permission Denied");
      throw new SQLPermissionDeniedException("Permission Denied");
    } else {
      String first = psql.getFirstCommand(inputSQL);
      ISQLCommands isqlC = commandRunMap.get(first);
      ResultSet result;
      try {
        result = isqlC.runSQLCommand(inputSQL, conn);
      } catch (SQLException e) {
        System.out.println("ERROR: SQL Query error");
        throw new SQLException();
      }
      return result;
    }
  }
}

