package edu.brown.cs.student.db_proxy.CreateStudent;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Class which creates student object based using outputs from an SQL query.
 */
public class CreateStudentSQL {
  private final ResultSet studentInfo;
  private final ResultSet interests;
  private final ResultSet skills;
  private final ResultSet traits;

  /**
   * Constructor for the CreateStudentSQL class.
   *
   * @param studentInfo the ResultSet from the names table
   * @param interests   the ResultSet from the interests table
   * @param skills      the ResultSet from the skills table
   * @param traits      the ResultSet from the traits table
   */
  public CreateStudentSQL(ResultSet studentInfo, ResultSet interests, ResultSet skills,
                          ResultSet traits) {
    this.studentInfo = studentInfo;
    this.interests = interests;
    this.skills = skills;
    this.traits = traits;
  }

  /**
   * Method which returns a HashMap of student objects with the key being the id.
   *
   * @return The HashMap of DataBase student objects
   * @throws SQLException throws when there are invalid outcomes
   */
  public Map<Integer, DatabaseStudent> studentInfoSQL() throws SQLException {
    Map<Integer, DatabaseStudent> student = new HashMap<>();
    while (this.studentInfo.next()) {
      int id = this.studentInfo.getInt(1);
      String name = this.studentInfo.getString(2);
      String email = this.studentInfo.getString(3);
      DatabaseStudent newStudent = new DatabaseStudent(id, name, email);
      student.put(id, newStudent);
    }
    addInterests(student);
    addskills(student);
    addTraits(student);
    return student;
  }

  /**
   * Method to add student interests to a student.
   *
   * @param student The HashMap of student objects
   * @throws SQLException throws when there are invalid outcomes
   */
  public void addInterests(Map<Integer, DatabaseStudent> student) throws SQLException {
    while (this.interests.next()) {
      int id = this.interests.getInt(1);
      String interest = this.interests.getString(2);
      if (student.containsKey(id)) {
        student.get(id).addInterest(interest);
      } else {
        System.out.println("ERROR: Student not found");
      }
    }
  }

  /**
   * Method to add student skills to a student.
   *
   * @param student The HashMap of student objects
   * @throws SQLException throws when there are invalid outcomes
   */
  public void addskills(Map<Integer, DatabaseStudent> student) throws SQLException {
    while (this.skills.next()) {
      int id = this.skills.getInt(1);
      String skill = this.skills.getString(2);
      if (student.containsKey(id)) {
        student.get(id).addSkill(skill);
      } else {
        System.out.println("ERROR: Student not found");
      }
    }
  }

  /**
   * Method to add student traits to a student.
   *
   * @param student The HashMap of student objects
   * @throws SQLException throws when there are invalid outcomes
   */
  public void addTraits(Map<Integer, DatabaseStudent> student) throws SQLException {
    while (this.traits.next()) {
      int id = this.traits.getInt(1);
      String traitType = this.traits.getString(2).toLowerCase();
      String trait = this.traits.getString(3);
      if (student.containsKey(id)) {
        if (traitType.equals("strengths")) {
          student.get(id).addStrength(trait);
        } else if (traitType.equals("weaknesses")) {
          student.get(id).addWeakness(trait);
        }
      } else {
        System.out.println("ERROR: Student not found");
      }
    }
  }
}
