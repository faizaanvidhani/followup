package edu.brown.cs.student.db_proxy.SQLTableFind;

import java.util.List;

/**
 * Class which finds the table for commands where the table exists right after the intial command.
 */
public class SQLAfterCommand implements ISQLFindTable {
  private final String command;

  /**
   * Constructor for SQLAfterCommand.
   * @param command the argument which has the table name following directly after
   */
  public SQLAfterCommand(String command) {
    this.command = command;
  }

  @Override
  public String findTable(List<String> sqlComms) {
    for (int i = 0; i < sqlComms.size(); i++) {
      if (sqlComms.get(i).equals(this.command)) {
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
