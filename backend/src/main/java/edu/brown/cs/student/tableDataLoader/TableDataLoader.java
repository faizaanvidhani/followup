package edu.brown.cs.student.tableDataLoader;

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
public class TableDataLoader {

  private static Connection conn = null;

  /**
   * Creates a list of HashMaps where each Hashmap contains a row of data with
   * the string column name mapped to its string value.
   */
  private final Map<String, Map<String, String>> tableData;

  /**
   * Constructor for the TableLoader class.
   *
   * @param filePath - a string, the path to the database file
   * @throws SQLException - for an invalid SQL query or database
   * @throws ClassNotFoundException - when the class with the name is not found
   */
  public TableDataLoader(String filePath) throws ClassNotFoundException, SQLException {
    // establish the connection
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filePath;
    conn = DriverManager.getConnection(urlToDB);
    // have the database enforce foreign keys during operations,
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
    this.tableData = new HashMap<>();
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
  public void fillTableData(String tableToLoad) throws SQLException {
    // Join block and column tables and get row data.
    String query = "SELECT * FROM " + tableToLoad + ";";

    ResultSet rowData = this.executeSQL(query);

    // Get columns from dataset.
    int numCols = rowData.getMetaData().getColumnCount();

    // fill row data
    while (rowData.next()) {
      Map<String, String> rowMap = new HashMap<>();
      for (int col = 1; col <= numCols; col++) {
        String colName = rowData.getMetaData().getColumnName(col);
        String cellData = rowData.getString(col);
        rowMap.put(colName, cellData);
      }
      this.tableData.put(rowData.getString(1), rowMap);
    }
  }

  /**
   * Getter for the kanbanData list.
   *
   * @return list of Hashmaps containing row data
   */
  public Map<String, Map<String, String>> getTableData() {
    return ImmutableMap.copyOf(this.tableData);
  }

  /**
   * insert functionality to database.
   * @param tableName table name
   * @param rowData row data
   * @throws SQLException sql exception
   */
  public void insertRow(String tableName, String rowData) throws SQLException {
    String[] row = rowData.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");

    String dataQuery = "SELECT * FROM " + tableName + ";";

    ResultSet sqlData = this.executeSQL(dataQuery);
    int numCols = sqlData.getMetaData().getColumnCount();

    StringBuilder columns = new StringBuilder();
    StringBuilder values = new StringBuilder();
    StringBuilder insertQuery = new StringBuilder("INSERT INTO " + tableName + " (");
    for (int col = 1; col <= numCols; col++) {
      String colName = sqlData.getMetaData().getColumnName(col);
      columns.append(colName).append(", ");
      values.append("'").append(row[col - 1]).append("'").append(", ");

    columns = new StringBuilder(columns.substring(0, columns.length() - 2));
    values = new StringBuilder(values.substring(0, values.length() - 2));

    insertQuery.append(columns);
    insertQuery.append(") VALUES (");
    insertQuery.append(values);

    String query = insertQuery + ");";
    PreparedStatement statement = conn.prepareStatement(query);
    statement.executeUpdate();
    }
  }

}
