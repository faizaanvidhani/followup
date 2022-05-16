package edu.brown.cs.student.db_proxy.SQLTableFind;

import java.util.List;

/**
 * Class which finds the table for commands where the table exists right after the command FROM.
 */
public class SQLAfterFrom implements ISQLFindTable {

  @Override
  public String findTable(List<String> sqlComms) {
    for (int i = 0; i < sqlComms.size(); i++) {
      if (sqlComms.get(i).equals("from")) {
        if (sqlComms.get(i + 1) != null) {
          return sqlComms.get(i + 1);
        } else {
          return null;
        }
      }
    }
    return null;
  }
}
