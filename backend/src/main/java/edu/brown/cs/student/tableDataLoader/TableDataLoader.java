package edu.brown.cs.student.tableDataLoader;

import com.google.common.collect.ImmutableList;

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
  private final List<Map<String, String>> tableData;

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
    this.tableData = new ArrayList<>();
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
    String query = "SELECT * FROM PRAGMA_TABLE_INFO('" + tableToLoad + "')";

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
      this.tableData.add(rowMap);
    }
  }

  /**
   * Getter for the kanbanData list.
   *
   * @return list of Hashmaps containing row data
   */
  public List<Map<String, String>> getTableData() {
    return ImmutableList.copyOf(this.tableData);
  }
}
