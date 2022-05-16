package edu.brown.cs.student.Commands;

import edu.brown.cs.student.db_proxy.GenericDatabase.Database;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Class which enables running sql commands through a terminal.
 */
public class RunSQLCommand implements ICommand {
  @Override
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    if (inputTokens.size() != 2) {
      System.out.println("ERROR: Incorrect number of arguments");
    } else {
      Database db;
      if (!dataHM.containsKey("table_connect")) {
        System.out.println("ERROR: No table connection");
        return;
      } else {
        db = (Database) dataHM.get("table_connect");
      }
      ResultSet rs = db.runWithCache(inputTokens.get(1));
      if (rs != null) {
        try {
          ResultSetMetaData rsmd = rs.getMetaData();
          int columnCount = rsmd.getColumnCount();
          while (rs.next()) {
            for (int i = 1; i <= columnCount; i++) {
              System.out.print(rs.getString(i));
              if (i < columnCount) {
                System.out.print(" ");
              }
            }
            System.out.println();
          }
        } catch (SQLException e) {
          System.out.println("ERROR: SQL Exception");
          return;
        }
      } else {
        return;
      }
    }
  }
}
