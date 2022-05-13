package edu.brown.cs.student.TableVisualization;

import com.google.common.collect.ImmutableMap;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Loads in a database and extracts information about the tables in the database.
 */
public class TableLoader {

  private static Connection conn = null;

  /**
   * Maps "tableNames" to a list of the names of the tables from the database.
   */
  private final Map<String, List<String>> tableNamesMap;

  /**
   * Maps "columnNames" to a list of the column names for a table,
   *      "columnTypes" to a list of types for each column
   *      "rowContents" to a list of all the cell contents for a table.
   */
  private final Map<String, List<String>> tableDataMap;

  /**
   * Constructor for the TableLoader class.
   *
   * @param filePath - a string, the path to the database file
   * @throws SQLException - for an invalid SQL query or database
   * @throws ClassNotFoundException - when the class with the name is not found
   */
  public TableLoader(String filePath) throws ClassNotFoundException, SQLException {
    // establish the connection
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filePath;
    conn = DriverManager.getConnection(urlToDB);
    // have the database enforce foreign keys during operations,
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
    this.tableNamesMap = new HashMap<>();
    this.tableDataMap = new HashMap<>();
    this.fillTableNamesMap();
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
   * Fills the tableNamesMap mapping tableNames to a list of the names of the tables
   * in the database.
   *
   * @throws SQLException - for an invalid SQL query or database
   */
  private void fillTableNamesMap() throws SQLException {
    String query =
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'";
    ResultSet names = this.executeSQL(query);
    List<String> tableNames = new ArrayList<>();
    if (names != null) {
      while (names.next()) {
        String name = names.getString(1);
        tableNames.add(name); // adding each table name to a list of all the table names
      }
    }
    this.tableNamesMap.put("tableNames", tableNames);
  }

  /**
   * Fills the tableDataMap mapping table information to their respective values.
   *
   * @param tableToLoad - a string, the name of the table from the database to load
   * @throws SQLException - for an invalid SQL query or database
   */
  public void fillTableDataMap(String tableToLoad) throws SQLException {
    // query to get the column name and column type
    String query = "SELECT name, type FROM PRAGMA_TABLE_INFO('" + tableToLoad + "')";
    List<String> columnNames = new ArrayList<>();
    List<String> columnTypes = new ArrayList<>();
    ResultSet names = this.executeSQL(query);

    if (names != null) {
      while (names.next()) {
        String name = names.getString(1);
        String type = names.getString(2);
        columnNames.add(name);
        columnTypes.add(type);
      }
    }

    // query to get all the row content from a table
    query = "SELECT * FROM " + tableToLoad;
    List<String> rowContents = new ArrayList<>();
    ResultSet row = this.executeSQL(query);

    if (row != null) {
      while (row.next()) {
        for (int col = 1; col <= columnNames.size(); col++) {
          String cell = row.getString(col);
          rowContents.add(cell);
        }
      }
    }

    // fill the hashmaps which will later be converted to JSON objects
    this.tableDataMap.put("columnNames", columnNames);
//    System.out.println(tableDataMap);
    this.tableDataMap.put("columnTypes", columnTypes);
    this.tableDataMap.put("rowContents", rowContents);
  }

  /**
   * Getter for the tableNamesMap.
   *
   * @return - the tableNamesMap
   */
  public Map<String, List<String>> getTableNamesMap() {
    return ImmutableMap.copyOf(this.tableNamesMap);
  }

  /**
   * Getter for the tableDataMap.
   *
   * @return = the tableNamesMap
   */
  public Map<String, List<String>> getTableDataMap() {
    return ImmutableMap.copyOf(this.tableDataMap);
  }

  /**
   * insert functionality to database.
   * @param tableName table name
   * @param rowData row data
   * @throws SQLException sql exception
   */
  public void insertRow(String tableName, String rowData) throws SQLException {
    String[] row = rowData.split(",");
    int numberOfColumns = tableDataMap.get("columnNames").size();
    String query = "INSERT INTO " + tableName + " (";
    System.out.println(row.length);
    System.out.println("jjjiowdnhkvj");
    System.out.println(numberOfColumns);
    System.out.println(row.toString());
    if (numberOfColumns == row.length) {
      for (int i = 0; i < tableDataMap.get("columnNames").size(); i++) {
        query += tableDataMap.get("columnNames").get(i) + ", ";
      }
      query = query.substring(0, query.length() - 2);
      query += ") VALUES (";
      for (int i = 0; i < row.length; i++) {
        query += "'" + row[i] + "'" + ", ";
      }
      query = query.substring(0, query.length() - 2);
      query += ")";
      System.out.println(query);
      PreparedStatement statement = conn.prepareStatement(query);
      statement.executeUpdate();
    } else {
      throw new SQLException();
    }
  }

  /**
   * function that handles the delete row functionality.
   * @param tableName table name
   * @param rowData row data
   * @throws SQLException SQL exception
   */
  public void deleteRow(String tableName, String rowData) throws SQLException {
    String[] row = rowData.split(",");
    int numberOfColumns = tableDataMap.get("columnNames").size();
    String query = "DELETE FROM " + tableName + " WHERE ";
    if (numberOfColumns == row.length) {
      for (int i = 0; i < tableDataMap.get("columnNames").size(); i++) {
        query += tableDataMap.get("columnNames").get(i) + "='" + row[i] + "' AND ";
      }
      query = query.substring(0, query.length() - 5);
      System.out.println(query);
      PreparedStatement statement = conn.prepareStatement(query);
      statement.executeUpdate();
    } else {
      throw new SQLException();
    }
  }

  /**
   * function that executes the update row command.
   * @param tableName the table name
   * @param rowData the row
   * @param newValue the new value
   * @param column the column
   * @throws SQLException throws the exception
   */
  public void updateRow(String tableName, String rowData, String newValue, String column)
      throws SQLException {
    String[] row = rowData.split(",");
    int numberOfColumns = tableDataMap.get("columnNames").size();
    String query = "UPDATE " + tableName + " SET " + column + "='" + newValue + "' WHERE ";
    if (numberOfColumns == row.length) {
      for (int i = 0; i < tableDataMap.get("columnNames").size(); i++) {
        query += tableDataMap.get("columnNames").get(i) + "='" + row[i] + "' AND ";
      }
      query = query.substring(0, query.length() - 5);
      System.out.println(query);
      PreparedStatement statement = conn.prepareStatement(query);
      statement.executeUpdate();
    } else {
      throw new SQLException();
    }
  }
}
