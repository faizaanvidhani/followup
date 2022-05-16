package edu.brown.cs.student.db_proxy.SQLCommands;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Class for running queries which alter the table.
 */
public class SQLTableAlter implements ISQLCommands {

  @Override
  public ResultSet runSQLCommand(String input1, Connection conn) throws SQLException {
    String sql = input1.replaceAll("^\"|\"$", "");
    PreparedStatement insert = conn.prepareStatement(sql);
    insert.executeUpdate();
    System.out.println("Table Updated");
    return null;
  }
}
