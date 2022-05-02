package edu.brown.cs.student.db_proxy.GenericDatabase;

import edu.brown.cs.student.db_proxy.SQLCommands.ISQLCommands;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

//run_sql data/sql/data.sqlite3 "SELECT * FROM NAMES"

/**
 * Class which connects to a database and runs the SQL commands.
 */
public class DBConnector {
  private Connection conn;
  private ISQLCommands isqlC;

  /**
   * Constructor which instantiates the connection.
   *
   * @param filename the filepath to the database
   * @throws ClassNotFoundException throws when a class is not found
   * @throws SQLException           throws when there is an issue with SQL
   * @throws FileNotFoundException thrown when a file is not found
   */
  public DBConnector(String filename)
          throws ClassNotFoundException, SQLException, FileNotFoundException {
    File file = new File(filename);
    if (!file.exists()) {
      System.out.println("ERROR: Filepath error");
      throw new FileNotFoundException();
    }
    Class.forName("org.sqlite.JDBC");
    String urlToDB = "jdbc:sqlite:" + filename;
    conn = DriverManager.getConnection(urlToDB);

    // these two lines tell the database to enforce foreign keys during operations,
    // and should be present
    Statement stat = conn.createStatement();
    stat.executeUpdate("PRAGMA foreign_keys=ON;");
  }

  /**
   * Method to get the current connection.
   *
   * @return a Connection object of the connection
   */
  public Connection getConn() {
    return this.conn;
  }
}
