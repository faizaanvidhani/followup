package edu.brown.cs.student.main.databaseproxy;

import main.java.edu.brown.cs.student.repl.Commandable;
//import main.java.edu.brown.cs.student.student.Student;

import javax.sql.rowset.CachedRowSet;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.ExecutionException;

/**
 * Class representing a commander for the database proxy class. Handles REPL commands
 * calling database proxy methods. Stores instance fields inputMap, a map containing the relevant
 * tables and their associated permissions in the given database, dbProxy, a DatabaseProxy object
 * representing the database proxy to be initiated for that database. Stores three static final
 * instance variables representing the filepaths of the three relevant databases used for the
 * purposes of the project.
 */
public class DatabaseCommander implements Commandable {
  private static HashMap<String, String> inputMap;
  private static DatabaseProxy dbProxy;
  private static final String PROFILE_INFO_FILEPATH = "data/profile_info.db";
  private static final String SYMPTOM_LOGGING_FILEPATH = "data/symptom_logging.db";

  /**
   * Method to execute a REPL command that relates to the database proxy.
   * @param command command string inputted by user
   * @param arguments list of parsed string arguments inputted by user
   * @return True if REPL should continue, false otherwise
   */
  public boolean executeCommand(String command, List<String> arguments) {
    switch (command) {
      case "connect": // connect <filepath>
        if (arguments.size() != 2) {
          System.out.println("ERROR: connect requires one argument");
          return true;
        } else {
          try {
            String filename = arguments.get(1);
            inputMap = new HashMap<>();
            switch (filename) {
              case PROFILE_INFO_FILEPATH: // loading profile_info.db
                inputMap.put("clinic", "RW");
                inputMap.put("patient", "RW");
                inputMap.put("provider", "RW");
                dbProxy = new DatabaseProxy(filename, inputMap);
                System.out.println("loaded data from profile_info.db");
                return true;
              case SYMPTOM_LOGGING_FILEPATH: // loading symptom_logging.db
                // symptom_logging.db has not been set up yet
                return true;
              default:
                System.err.println("ERROR: invalid filepath; no data was loaded");
                return true;
            }
          } catch (SQLException e) {
            System.out.println("ERROR: SQL error");
          } catch (ClassNotFoundException e) {
            System.out.println("ERROR: unknown error occurred");
          }
          return true;
        }
      case "run": // run <command>
        if (dbProxy == null) {
          System.err.println("ERROR: No database loaded");
          return true;
        }
        String sqlArg = unparse(arguments.subList(1, arguments.size()));
        sqlArg = sqlArg.toLowerCase(Locale.ROOT);
        try {
          CachedRowSet results = dbProxy.execute(sqlArg);
          if (sqlArg.contains("select")) {
            ResultSet rsForPrinting = results.createCopy();
            printResults(rsForPrinting);
          } else {
            System.out.println("Command successfully executed");
          }
          return true;
        } catch (SQLException throwables) {
          throwables.printStackTrace();
          System.out.println("ERROR: SQL command is invalid");
          return true;
        } catch (InvalidPermissionsException e) {
          System.out.println("ERROR: SQL command is not allowed");
          return true;
        } catch (ExecutionException e) {
          System.out.println("ERROR: Encountered caching error");
        }
      default:
        System.out.println("ERROR: Invalid input");
        return true;
    }
  }

  /**
   * Method to unparse the arguments passed in by the REPL parser. Used to
   * put together arguments into a usable format representing an SQL query
   * to be used in execution by the database proxy.
   * @param arguments a List of Strings representing the parsed version
   *                  of the input to the REPL
   * @return a String representing the unparsed command passed to the REPL
   */
  public String unparse(List<String> arguments) {
    String sqlArgument = "";
    for (String arg : arguments) {
      sqlArgument += arg + " ";
    }
    return sqlArgument.substring(0, sqlArgument.length() - 1);
  }

  /**
   * Method to print the result set; taken from StackOverflow.
   *
   * @param results a ResultSet from a query.
   * @throws SQLException if the results do not have metadata.
   */
  public void printResults(ResultSet results) throws SQLException {
    ResultSetMetaData rsmd = results.getMetaData();
    // logic from stackOverflow
    int columnsNumber = rsmd.getColumnCount();
    while (results.next()) {
      for (int i = 1; i <= columnsNumber; i++) {
        if (i > 1) {
          System.out.print(", ");
        }
        String columnValue = results.getString(i);
        System.out.print(columnValue + " ");
      }
      System.out.println();
    }
  }

}
