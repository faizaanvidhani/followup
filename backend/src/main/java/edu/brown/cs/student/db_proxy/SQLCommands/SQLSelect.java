package edu.brown.cs.student.db_proxy.SQLCommands;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;;
import java.sql.SQLException;

/**
 * Class to run queries where items are being extracted.
 */
public class SQLSelect implements ISQLCommands {
  private ResultSet rs;

  @Override
  public ResultSet runSQLCommand(String input1, Connection conn) throws SQLException {
    String sql = input1.replaceAll("^\"|\"$", "");
    PreparedStatement rolefinder = conn.prepareStatement(sql);
    return rolefinder.executeQuery();
  }
}
