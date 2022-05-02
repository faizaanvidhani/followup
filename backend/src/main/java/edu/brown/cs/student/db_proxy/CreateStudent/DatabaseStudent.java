package edu.brown.cs.student.db_proxy.CreateStudent;

import java.util.ArrayList;
import java.util.List;

/**
 * Class representing a student, instantiated using the data table.
 */
public class DatabaseStudent {
  private int id;
  private String name;
  private String email;
  private List<String> strength;
  private List<String> weakness;
  private List<String> interest;
  private List<String> skills;

  /**
   * Constructor for a DatabaseStudent.
   *
   * @param id    the id of the student
   * @param name  the name of the student
   * @param email the email of the student
   */
  public DatabaseStudent(int id, String name, String email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.strength = new ArrayList<>();
    this.weakness = new ArrayList<>();
    this.interest = new ArrayList<>();
    this.skills = new ArrayList<>();
  }

  //https://stackoverflow.com/questions/7806709/remove-trailing-comma-from-comma-separated-string

  /**
   * String representation of student's strengths.
   *
   * @return A concatenated string of all the strengths
   */
  public String strengthToString() {
    StringBuilder ret = new StringBuilder();
    for (String s : this.strength) {
      ret.append(s).append(", ");
    }
    return ret.toString().replaceAll(", $", "");
  }

  /**
   * String representation of student's weaknesses. This is for testing purposes
   *
   * @return A concatenated string of all the weaknesses
   */
  public String weaknessToString() {
    StringBuilder ret = new StringBuilder();
    for (String s : this.weakness) {
      ret.append(s).append(", ");
    }
    return ret.toString().replaceAll(", $", "");
  }

  /**
   * String representation of student's interests.
   *
   * @return A concatenated string of all the interests
   */
  public String interestToString() {
    StringBuilder ret = new StringBuilder();
    for (String s : this.interest) {
      ret.append(s).append(", ");
    }
    return ret.toString().replaceAll(", $", "");
  }

  /**
   * String representation of student's skills.
   *
   * @return A concatenated string of all the skills
   */
  public String skillsToString() {
    StringBuilder ret = new StringBuilder();
    for (String s : this.skills) {
      ret.append(s).append(", ");
    }
    return ret.toString().replaceAll(", $", "");
  }

  /**
   * Getter for the student id.
   *
   * @return the student id in int form
   */
  public int getId() {
    return id;
  }

  /**
   * Getter for student name.
   *
   * @return the student name in String from.
   */
  public String getName() {
    return name;
  }

  /**
   * Getter for the student's email.
   *
   * @return Student's email in String form
   */
  public String getEmail() {
    return email;
  }

  /**
   * Method to add to a student's strength list.
   *
   * @param strngth the strength to add
   */
  public void addStrength(String strngth) {
    this.strength.add(strngth);
  }

  /**
   * Method to add to a student's weakness list.
   *
   * @param wknss the weakness to add
   */
  public void addWeakness(String wknss) {
    this.weakness.add(wknss);
  }

  /**
   * Method to add to a student's interest list.
   *
   * @param intrst the interest to add
   */
  public void addInterest(String intrst) {
    this.interest.add(intrst);
  }

  /**
   * Method to add ot a student's skill list.
   *
   * @param skll the skill to add
   */
  public void addSkill(String skll) {
    this.skills.add(skll);
  }
}
