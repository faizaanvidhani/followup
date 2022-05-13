package edu.brown.cs.student.db_proxy.SQLCommands;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Interface representing different types of execution depending on the command.
 */
public interface ISQLCommands {
  /**
   * Method that will run the SQL query.
   *
   * @param input1 String representation of the SQL query
   * @param conn   the Connection to the database
   * @return the ResultSet of running a command will be null if there is nothing to return
   * @throws SQLException thrown if the query is invalid
   */
  ResultSet runSQLCommand(String input1, Connection conn) throws SQLException;
}
