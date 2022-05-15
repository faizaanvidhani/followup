package edu.brown.cs.student.patientLoader;

import com.google.common.collect.ImmutableMap;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Loads in a database and extracts information about the tables in the database.
 */
public class PatientLoader {

  private static Connection conn = null;

  /**
   * Maps "columnNames" to a list of the column names for a table,
   *      "columnTypes" to a list of types for each column
   *      "rowContents" to a list of all the cell contents for a table.
   */
  private final Map<String, List<String>> patientData;

  /**
   * Constructor for the TableLoader class.
   *
   * @param filePath - a string, the path to the database file
   * @throws SQLException - for an invalid SQL query or database
   * @throws ClassNotFoundException - when the class with the name is not found
   */
  public PatientLoader(String filePath) throws ClassNotFoundException, SQLException {
    // establish the connection
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filePath;
    conn = DriverManager.getConnection(urlToDB);
    // have the database enforce foreign keys during operations,
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
    this.patientData = new HashMap<>();
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
   * @param patientID - a string provider ID
   * @throws SQLException - for an invalid SQL query or database
   */
  public void fillPatientData(String patientID) throws SQLException {
    // query to get the column name and column type
    String query = "SELECT * FROM Patient WHERE user_id = " + patientID + ";";
    ResultSet providerResult = this.executeSQL(query);

    int numCols = providerResult.getMetaData().getColumnCount();

    List<String> patientInfo = new ArrayList<>();
    for (int col = 1; col <= numCols; col++) {
      String cellData = providerResult.getString(col);
      patientInfo.add(cellData);
    }
    this.patientData.put("patientData", patientInfo);
    providerResult.close();
  }

  public void fillSymptomIDs(String patientID) throws SQLException {
    String patientQuery = "SELECT * FROM SymptomLog WHERE patient_id = " + patientID + ";";
    ResultSet rowData = this.executeSQL(patientQuery);

    // fill row data
    List<String> logIDs = new ArrayList<>();
    if (rowData != null) {
      while (rowData.next()) {
        String id = rowData.getString(1);
        logIDs.add(id); // adding each table name to a list of all the table names
      }
      this.patientData.put("logIDs", logIDs);
      rowData.close();
    }
  }


  /**
   * Getter for the tableDataMap.
   *
   * @return = the tableNamesMap
   */
  public Map<String, List<String>> getProviderData() {
    return ImmutableMap.copyOf(this.patientData);
  }

}
