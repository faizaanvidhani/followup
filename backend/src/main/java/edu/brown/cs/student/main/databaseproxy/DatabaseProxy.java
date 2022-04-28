package edu.brown.cs.student.databaseproxy;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import javax.sql.rowset.CachedRowSet;
import javax.sql.rowset.RowSetFactory;
import javax.sql.rowset.RowSetProvider;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;

/**
 * Class for a Database Proxy, which allows users to connect to and interact with
 * databases while also protecting elements of access and modification of those databases.
 * Implements caching of user query results using Google Guava.
 */
public class DatabaseProxy {

  private static Connection conn = null;
  private static HashMap<String, String> commandMap;
  private HashMap<String, String> permissionMap;
  private static final int CACHE_MAX_SIZE = 5;
  private LoadingCache<String, CachedRowSet> cache =
          CacheBuilder.newBuilder().maximumSize(CACHE_MAX_SIZE).build(new CacheLoader<>() {
            public CachedRowSet load(String s) throws SQLException,
                    ExecutionException, InvalidPermissionsException {
              return execute(s);
            }
          });

  /**
   * Constructor for the DatabaseProxy class. Takes in a string representing the
   * filepath of the database to connect to, a Map of Strings to Strings representing
   * the tables and associated permissions in for that database and instantiates the
   * database proxy accordingly. Throws SQLExceptions and ClassNotFoundExceptions when
   * connection and setup encounters an error.
   *
   * @param filename - a String of the filepath of the database to connect to
   * @param inputMap - a Map of Strings to Strings mapping the table names to their
   *                 associated permissions in the database
   * @throws SQLException           - error thrown with SQL error
   * @throws ClassNotFoundException - error thrown in failed connection
   */
  public DatabaseProxy(String filename, HashMap<String, String> inputMap)
          throws SQLException, ClassNotFoundException {
    commandMap = new HashMap<>();
    commandMap.put("select", "R");
    commandMap.put("insert", "W");
    commandMap.put("drop", "RW");
    commandMap.put("update", "RW");
    commandMap.put("delete", "RW");
    commandMap.put("alter", "RW");
    commandMap.put("join", "R");
    commandMap.put("truncate", "RW");
    this.permissionMap = inputMap;
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filename;
    conn = DriverManager.getConnection(urlToDB);
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
  }

  /**
   * Method to execute a SQL command given by the user of the database proxy,
   * checking for if the command is within the user's authorizations as specified
   * by the permissions in the permissions table.
   * Takes in a String representing the command given and returns a CachedRowSet
   * contianing data from a ResultSet that results from executing command.
   * Throws SQLExceptions, InvalidPermissionsExceptions, and ExecutionExceptions
   * in the case of errors.
   *
   * @param command - a String representing the SQL command to be executed
   * @return a CachedRowSet storing the data from the ResultSet that results
   * from executing command
   * @throws SQLException                - error thrown with SQL error
   * @throws InvalidPermissionsException - error thrown in the event that permissions
   *                                     are not met
   * @throws ExecutionException          - error thrown with caching error (from Guava)
   */
  public CachedRowSet execute(String command) throws SQLException,
          InvalidPermissionsException, ExecutionException {
    String input = command.toLowerCase();
    boolean commandValidity = checkCommandValidity(input);
    if (!commandValidity) {
      throw new InvalidPermissionsException("ERROR: Invalid Permissions");
    }
    ResultSet queryResult = cache.getIfPresent(input);
    if (queryResult != null) {
      // CachedRowSet code from EdStem Post #1004
      RowSetFactory factory = RowSetProvider.newFactory();
      CachedRowSet rowset = factory.createCachedRowSet();
      rowset.populate(queryResult);
      rowset.beforeFirst();
      return rowset;
    }
    PreparedStatement prep;
    try {
      prep = conn.prepareStatement(input);
    } catch (Exception e) {
      permissionMap = null;
      throw new SQLException();
    }
    if (prep.execute()) {
      ResultSet rs = prep.getResultSet();
      RowSetFactory factory = RowSetProvider.newFactory();
      CachedRowSet rowset = factory.createCachedRowSet();
      rowset.populate(rs);
      cache.put(input, rowset);
      return cache.get(input);
    } else {
      cache.invalidateAll();
    }
    return null;
  }

  /**
   * Method to check the validity of a given command, as specified by the
   * permissions in the permissions table; used in execution.
   *
   * @param sqlCommand - a String representing the SQL command to validate
   * @return a boolean indicating whether or not the command is valid to run
   * based on the permissions specified in the permissions table
   */
  public boolean checkCommandValidity(String sqlCommand) {
    String sqlLower = sqlCommand.toLowerCase();
    String[] splitCommand = sqlLower.split(" ");
    String permNeeded = commandMap.get(splitCommand[0]);
    if (permNeeded == null) {
      return false;
    }
    for (int i = 1; i < splitCommand.length - 1; i++) {
      String curr = splitCommand[i];
      if (curr.equals("join") || curr.equals("from") || curr.equals("into")) {
        String tablePermission = this.permissionMap.get(splitCommand[i + 1]);
        if (tablePermission == null) {
          return false;
        }
        if (!tablePermission.contains(permNeeded)) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Getter method for permissionMap field; used to get the permissions
   * for tables in the given database.
   *
   * @return a HashMap of Strings to Strings indicating the associated
   * tables and permissions in the database
   */
  public HashMap<String, String> getPermissionMap() {
    return permissionMap;
  }

  /**
   * Getter method for the size of the cache; used for testing purposes.
   *
   * @return a long associated with the size of the cache
   */
  public long getCacheSize() {
    return cache.size();
  }

}
