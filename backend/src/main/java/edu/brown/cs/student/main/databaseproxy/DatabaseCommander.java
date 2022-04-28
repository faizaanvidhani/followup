package edu.brown.cs.student.databaseproxy;

import edu.brown.cs.student.repl.Commandable;
import edu.brown.cs.student.student.Student;
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
  private static final String DATA_FILEPATH = "data/dbFiles/data.sqlite3";
  private static final String HOROSCOPES_FILEPATH = "data/dbFiles/horoscopes.sqlite3";
  private static final String ZOO_FILEPATH = "data/dbFiles/zoo.sqlite3";

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
              case DATA_FILEPATH: // loading data.sqlite3
                inputMap.put("interests", "RW");
                inputMap.put("skills", "RW");
                inputMap.put("names", "RW");
                inputMap.put("traits", "RW");
                dbProxy = new DatabaseProxy(filename, inputMap);
                System.out.println("loaded data from data.sqlite3");
                return true;
              case HOROSCOPES_FILEPATH: // loading horoscopes.sqlite3
                inputMap.put("horoscopes", "RW");
                inputMap.put("sqlite_sequence", "R");
                inputMap.put("tas", "RW");
                inputMap.put("ta_horoscope", "RW");
                dbProxy = new DatabaseProxy(filename, inputMap);
                System.out.println("loaded data from horoscopes.sqlite3");
                return true;
              case ZOO_FILEPATH: // loading zoo.sqlite3
                inputMap.put("zoo", "RW");
                dbProxy = new DatabaseProxy(filename, inputMap);
                System.out.println("loaded data from zoo.sqlite3");
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

  /**
   * Method to add attributes to a Student object from data in
   * data.sqlite3 file used by database proxy in this project. Hard coded
   * for data.sqlite3 - for use in recommender system.
   * @param s - a Student object to add attributes to
   * @param fileName - a String indicating the filepath of the database to
   *                 connect to
   * @throws SQLException - in case of SQL error
   * @throws InvalidPermissionsException - in case of permissions not being met
   * @throws ClassNotFoundException - in case database or connection error
   * @throws ExecutionException - in case of caching error
   */
  public static void addAttributesToStudent(Student s, String fileName)
      throws SQLException, InvalidPermissionsException, ClassNotFoundException, ExecutionException {
    if (dbProxy == null || dbProxy.getPermissionMap().containsKey("interests")) {
      inputMap = new HashMap<>();
      inputMap.put("interests", "RW");
      inputMap.put("skills", "RW");
      inputMap.put("names", "RW");
      inputMap.put("traits", "RW");
      dbProxy = new DatabaseProxy(fileName, inputMap);
    }
    try {
      addStudentTraits(s);
      addStudentInterests(s);
      addStudentSkills(s);
      addStudentEmails(s);
    } catch (SQLException | ExecutionException e) {
      dbProxy = null;
      throw new SQLException();
    }
  }

  /**
   * Method for adding traits to a Student object using the traits table
   * in data.sqlite3 database.
   * @param s - a Student object to add traits to
   * @throws SQLException - in case of SQL error
   * @throws InvalidPermissionsException - in case of permissions not being met
   * @throws ExecutionException - in case of caching error
   */
  private static void addStudentTraits(Student s) throws SQLException, InvalidPermissionsException,
          ExecutionException {
    int id = s.getID();
    String sqlQuery =
        "SELECT trait from traits where id = " + id
           + " AND UPPER(type_of_attribute) = \"STRENGTHS\"";
    CachedRowSet results = dbProxy.execute(sqlQuery);
    ResultSet rsForAddingStrengths = results.createCopy();
    while (rsForAddingStrengths.next()) {
      s.addData(rsForAddingStrengths.getString(1), "strengths");
    }
    sqlQuery =
        "SELECT trait from traits where id = " + id
            + " AND UPPER(type_of_attribute) = \"WEAKNESSES\"";
    results = dbProxy.execute(sqlQuery);
    ResultSet rsForAddingWeaknesses = results.createCopy();
    while (rsForAddingWeaknesses.next()) {
      s.addData(rsForAddingWeaknesses.getString(1), "weaknesses");
    }
  }

  /**
   * Method for adding interests to a Student object using the interests table
   * in the data.sqlite3 database.
   * @param s - a Student object to add interests to
   * @throws SQLException - in case of SQL error
   * @throws InvalidPermissionsException - in case of permissions not being met
   * @throws ExecutionException - in case of caching error
   */
  private static void addStudentInterests(Student s) throws SQLException,
      InvalidPermissionsException, ExecutionException {
    int id = s.getID();
    String sqlQuery = "SELECT interest from interests where id = " + id;
    CachedRowSet results = dbProxy.execute(sqlQuery);
    ResultSet rsForAddingInterests = results.createCopy();
    while (rsForAddingInterests.next()) {
      s.addData(rsForAddingInterests.getString(1), "interests");
    }
  }

  /**
   * Method for adding skills to a Student object using the skills table
   * in the data.sqlite3 database.
   * @param s - a Student object to add skills to
   * @throws SQLException - in case of SQL error
   * @throws InvalidPermissionsException - in case of permissions not being met
   * @throws ExecutionException - in case of caching error
   */
  private static void addStudentSkills(Student s) throws SQLException,
      InvalidPermissionsException, ExecutionException {
    int id = s.getID();
    String sqlQuery = "SELECT skill from skills where id = " + id;
    CachedRowSet results = dbProxy.execute(sqlQuery);
    ResultSet rsForAddingSkills = results.createCopy();
    while (rsForAddingSkills.next()) {
      s.addData(rsForAddingSkills.getString(1), "skills");
    }
  }

  /**
   * Method for adding emails to a Student object using the names table
   * in the data.sqlite3 database.
   * @param s - a Student object to add emails to
   * @throws SQLException - in case of SQL error
   * @throws InvalidPermissionsException - in case of permissions not being met
   * @throws ExecutionException - in case of caching error
   */
  private static void addStudentEmails(Student s) throws SQLException,
      InvalidPermissionsException, ExecutionException {
    int id = s.getID();
    String sqlQuery = "SELECT email from names where id = " + id;
    CachedRowSet results = dbProxy.execute(sqlQuery);
    ResultSet rsForAddingEmails = results.createCopy();
    while (rsForAddingEmails.next()) {
      s.addData(rsForAddingEmails.getString(1), "emails");
    }
  }

}
