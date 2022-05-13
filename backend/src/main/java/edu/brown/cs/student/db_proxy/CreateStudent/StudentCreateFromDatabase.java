package edu.brown.cs.student.db_proxy.CreateStudent;

import edu.brown.cs.student.db_proxy.GenericDatabase.Database;

import java.io.FileNotFoundException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

/**
 * Class which creates students from the data table utilizing the generic database.
 * This will be called in the repl for testing/demonstration purposes.
 * This can be used as a template to see how to use the Database class to query tables with SQL
 * commands.
 */
public class StudentCreateFromDatabase {
  private final Database db;

  /**
   * Constructor to instantiate the class. The class instantiates a Database object with the desired
   * file path. Multiple Database objects can be instantiated (although not in this case) meaning
   * multiple connections to different tables can coexist.
   *
   * @throws SQLException           thrown when there is an SQL error
   * @throws ClassNotFoundException thrown when a class is not found
   * @throws FileNotFoundException  thrown when a file is not found
   */
  public StudentCreateFromDatabase()
          throws SQLException, ClassNotFoundException, FileNotFoundException {
    db = new Database("data/sql/data.sqlite3");
  }

  /**
   * Method which utilizes SQL queries to create a Hashmap of Database students.
   *
   * @return a HashMap of the student ID to the Database student object.
   */
  public Map<Integer, DatabaseStudent> createStudents() {
    String sqlName = "SELECT * FROM names";
    String sqlInterest = "SELECT * FROM interests";
    String sqlTrait = "SELECT * FROM traits";
    String sqlSkill = "SELECT * FROM skills";
    //run the sql commands
    ResultSet studentInfo = this.db.runWithCache(sqlName);
    ResultSet interests = this.db.runWithCache(sqlInterest);
    ResultSet skills = this.db.runWithCache(sqlSkill);
    ResultSet traits = this.db.runWithCache(sqlTrait);
    //check for errors
    if (studentInfo == null || interests == null || skills == null || traits == null) {
      return null;
    }
    //create the Database Students using CreateStudentSQL object
    CreateStudentSQL csSQL = new CreateStudentSQL(studentInfo, interests, skills, traits);
    Map<Integer, DatabaseStudent> studentMap;
    try {
      studentMap = csSQL.studentInfoSQL();
    } catch (SQLException e) {
      //main purpose is for repl for testing / demo
      System.out.println("ERROR: SQL Exception");
      return null;
    }
    return studentMap;
  }
}
