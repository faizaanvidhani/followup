package edu.brown.cs.student.userLoader;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Loads in a database and extracts information about the tables in the database.
 */
public class UserDataLoader {

  private static Connection conn = null;

  /**
   * Creates a list of HashMaps where each Hashmap contains a row of data with
   * the string column name mapped to its string value.
   */
  private final Map<String, String> userData;

  /**
   * Constructor for the TableLoader class.
   *
   * @param filePath - a string, the path to the database file
   * @throws SQLException - for an invalid SQL query or database
   * @throws ClassNotFoundException - when the class with the name is not found
   */
  public UserDataLoader(String filePath) throws ClassNotFoundException, SQLException {
    // establish the connection
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filePath;
    conn = DriverManager.getConnection(urlToDB);
    // have the database enforce foreign keys during operations,
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
    this.userData = new HashMap<>();
    this.fillUserData();
  }

  /**
   * Executes the SQL query.
   *
   * @param query the SQL query to be executed
   * @return a ResultSet representing the results of the SQL query
   */
  public ResultSet executeSQL(String query) {
    try {
      PreparedStatement statement = conn.prepareStatement(query);
      return statement.executeQuery();
    } catch (SQLException e) {
      System.out.println("The requested database is not in the correct format.");
      return null;
    }
  }

  /**
   * Fills the kanbanDataMap mapping table information to their respective values.
   *
   * @throws SQLException - for an invalid SQL query or database
   */
  public void fillUserData() throws SQLException {
    // Join block and column tables and get row data.
    String query = "SELECT * FROM Users;";

    ResultSet rowData = this.executeSQL(query);

    // Get columns from dataset.
    int numCols = rowData.getMetaData().getColumnCount();

    // fill row data
    while (rowData.next()) {
      for (int col = 1; col <= numCols; col++) {
        String colName = rowData.getMetaData().getColumnName(col);
        String cellData = rowData.getString(col);
        this.userData.put(colName, cellData);
      }
    }
  }

  /**
   * Getter for the kanbanData list.
   *
   * @return list of Hashmaps containing row data
   */
  public Map<String, String> getUserData() {
    return ImmutableMap.copyOf(this.userData);
  }

}
