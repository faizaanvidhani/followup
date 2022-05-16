package edu.brown.cs.student.db_proxy.GenericDatabase;

import edu.brown.cs.student.db_proxy.Exceptions.CommandNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.TableNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.SQLPermissionDeniedException;
import edu.brown.cs.student.db_proxy.PermissionTypes.IPermissions;

import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;
import java.util.concurrent.ExecutionException;

/**
 * Class to connect and query a database. This class is generic and can be used to connect any
 * valid database. Multiple objects of this class can be made which enables multiple database
 * connections.
 */
public class Database {
  private final String filePath;
  private Cache cache;
  private final Connection conn;

  /**
   * Constructor which instantiates a connection with a database.
   *
   * @param filePath the file path to the desired database.
   * @throws SQLException           thrown when there is an SQL error
   * @throws ClassNotFoundException thrown when a class is not found
   * @throws FileNotFoundException  thrown when a file is not found
   */
  public Database(String filePath)
          throws SQLException, ClassNotFoundException, FileNotFoundException {
    this.filePath = filePath;
    this.conn = createConnection();
    instantiateCache();
  }

  /**
   * Method which will create a connection to a database with a filepath.
   *
   * @return a Connection object which is the connection to the database
   * @throws SQLException           thrown when there is an SQL error
   * @throws ClassNotFoundException thrown when a class is not found
   * @throws FileNotFoundException  thrown when a file is not found
   */
  public Connection createConnection()
          throws SQLException, ClassNotFoundException, FileNotFoundException {
    DBConnector dbc;
    dbc = new DBConnector(this.filePath);
    return dbc.getConn();
  }

  /**
   * Method to close the connection to the database.
   */
  public void closeConn() {
    try {
      this.conn.close();
    } catch (SQLException e) {
      System.out.println("ERROR: No connection to close");
    }
  }

  /**
   * Method which runs the SQL command without utilizing a Cache. Primarily used when altering the
   * table
   *
   * @param sqlQuery the SQL query
   * @return A ResultSet of the SQL query, null if the commands alter the table.
   */
  public ResultSet runSQL(String sqlQuery) {
    RunSQL rsql = new RunSQL(this.conn);
    try {
      return rsql.runCommand(sqlQuery);
    } catch (SQLException | SQLPermissionDeniedException
            | TableNotFoundException | CommandNotFoundException e) {
      return null;
    }
  }

  /**
   * Method which instantiates a new Cache.
   */
  public void instantiateCache() {
    this.cache = new Cache(this.conn);
  }

  /**
   * Method to get the size of the Cache used for testing.
   *
   * @return the size of the cache
   */
  public long getCacheSize() {
    return this.cache.getSqlCache().size();
  }

  /**
   * Method which will run the SQL query utilizing the cache.
   *
   * @param sqlQuery the SQL query
   * @return a ResultSet of the SQL query, null if there are any errors (for repl)
   */
  public ResultSet runWithCache(String sqlQuery) {
    DatabaseHM dHM = new DatabaseHM();
    //Get the permissions for the commands
    Map<String, IPermissions> permCommand = dHM.permissionsCommand();
    //parser object to see if the command will alter the table
    ParseSQL parser = new ParseSQL();
    boolean willChange;
    try {
      // checks to see if the table is changed with the given query
      willChange = parser.doesTableAlter(sqlQuery, permCommand);
    } catch (CommandNotFoundException e) {
      return null;
    }
    if (willChange) {
      //clears the cache
      instantiateCache();
      //runs the query
      return runSQL(sqlQuery);
    } else {
      try {
        //get the ResultSet using the cache
        return cache.getSqlCache().get(sqlQuery);
      } catch (ExecutionException e) {
        return null;
      }
    }
  }
}
