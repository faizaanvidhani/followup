package edu.brown.cs.student.db_proxy.SQLTableFind;

import java.util.List;

/**
 * Interface which finds the table in a query given certain commands.
 */
public interface ISQLFindTable {
  /**
   * Method which will find the table associated with a particular command.
   *
   * @param qlComms the sql query split into a list
   * @return the name of the table in string form
   */
  String findTable(List<String> qlComms);
}
