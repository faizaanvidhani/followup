package edu.brown.cs.student.providerLoader;

import com.google.common.collect.ImmutableMap;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Loads in a database and extracts information about the tables in the database.
 */
public class ProviderLoader {

  private static Connection conn = null;

  /**
   * Maps "columnNames" to a list of the column names for a table,
   *      "columnTypes" to a list of types for each column
   *      "rowContents" to a list of all the cell contents for a table.
   */
  private final Map<String, List<String>> providerData;

  /**
   * Constructor for the TableLoader class.
   *
   * @param filePath - a string, the path to the database file
   * @throws SQLException - for an invalid SQL query or database
   * @throws ClassNotFoundException - when the class with the name is not found
   */
  public ProviderLoader(String filePath) throws ClassNotFoundException, SQLException {
    // establish the connection
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filePath;
    conn = DriverManager.getConnection(urlToDB);
    // have the database enforce foreign keys during operations,
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
    this.providerData = new HashMap<>();
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
      System.out.println(e.getMessage());
      return null;
    }
  }

  /**
   * Fills the tableDataMap mapping table information to their respective values.
   *
   * @param providerID - a string provider ID
   * @throws SQLException - for an invalid SQL query or database
   */
  public void fillProviderData(String providerID) throws SQLException {
    // query to get the column name and column type
    String query = "SELECT * FROM Provider WHERE provider_id = " + providerID + ";";
    ResultSet providerResult = this.executeSQL(query);

    int numCols = providerResult.getMetaData().getColumnCount();

    List<String> providerInfo = new ArrayList<>();
    for (int col = 1; col <= numCols; col++) {
      String cellData = providerResult.getString(col);
      providerInfo.add(cellData);
    }
    this.providerData.put("providerData", providerInfo);

    String patientQuery = "SELECT * FROM Patient WHERE provider_id = " + providerID + ";";
    ResultSet rowData = this.executeSQL(patientQuery);

    // fill row data
    List<String> patientIDs = new ArrayList<>();
    if (rowData != null) {
      while (rowData.next()) {
        String id = rowData.getString(1);
        patientIDs.add(id); // adding each table name to a list of all the table names
      }
    }
    this.providerData.put("patientIDs", patientIDs);
  }

  /**
   * Getter for the tableDataMap.
   *
   * @return = the tableNamesMap
   */
  public Map<String, List<String>> getProviderData() {
    return ImmutableMap.copyOf(this.providerData);
  }

}
