package edu.brown.cs.student.Commands;

import edu.brown.cs.student.db_proxy.GenericDatabase.Database;

import java.io.FileNotFoundException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Class which will create a connection to a database in the REPL.
 */
public class CreateConnectionCommand implements ICommand {

  @Override
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    if (inputTokens.size() != 2) {
      System.out.println("ERROR: Incorrect number of arguments");
    } else {
      Database db;
      try {
        db = new Database(inputTokens.get(1));
      } catch (SQLException | ClassNotFoundException | FileNotFoundException e) {
        return;
      }
      dataHM.put("table_connect", db);
      System.out.println("Successfully Connected To Database");
    }
  }

}
