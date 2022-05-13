package edu.brown.cs.student.Data;

import java.util.List;

/**
 * class which represents a Student.
 * To ensure user privacy only necessary data points are taken and used.
 *
 * @author taishinishizawa keigoh
 */
public class Student {
  private final int id;
  private final double experience;
  private final double hours;
  private final double confidence;

  /**
   * CONSTRUCTOR 1: TAKES IN EACH ARGUMENT SEPARATELY.
   *
   * @param id         - String representing the id of the student
   * @param experience - String representing the experience of the student
   * @param hours      - String representing the hours of the student
   * @param confidence - String representing the confidence of the student
   * @throws NumberFormatException throws if the input is not parsable
   */
  public Student(String id, String experience, String hours, String confidence)
      throws NumberFormatException {
    this.id = Integer.parseInt(id);
    this.experience = Double.parseDouble(experience);
    this.hours = Double.parseDouble(hours);
    this.confidence = Double.parseDouble(confidence);
  }

  /**
   * CONSTRUCTOR 2: TAKES IN THE ARGUMENT AS A LIST (used in IDataInstantiator).
   *
   * @param arguments - a list containing the four Strings, representing id, experience, hours, and
   *                  confidence. The list will always conform to this requirement because this
   *                  constructor will only be called after we have checked for the correct
   *                  arguments in CSVParser.
   * @throws NumberFormatException throws if the input is not parsable
   */
  public Student(List<String> arguments) throws NumberFormatException {
    this.id = Integer.parseInt(arguments.get(0));
    this.experience = Double.parseDouble(arguments.get(1));
    this.hours = Double.parseDouble(arguments.get(2));
    this.confidence = Double.parseDouble(arguments.get(3));
  }

  /**
   * Gets the coordinates (experience, hours, confidence) of the student which will be used as
   * the coordinates in the nodes.
   *
   * @return a double array containing the coordinates of this student
   */
  public double[] getCoordinates() {
    double[] retCor = new double[3];
    retCor[0] = this.experience;
    retCor[1] = this.hours;
    retCor[2] = this.confidence;
    return retCor;
  }

  /**
   * Gets the id of the student.
   *
   * @return an int representing the student's id
   */
  public int getId() {
    return this.id;
  }

  /**
   * Gets the experience value of the student.
   *
   * @return a double value representing experience
   */
  public double getExperience() {
    return experience;
  }

  /**
   * Gets the hours value of the student.
   *
   * @return a double value representing hours
   */
  public double getHours() {
    return hours;
  }

  /**
   * Gets the confidence value of the student.
   *
   * @return a double value representing confidence
   */
  public double getConfidence() {
    return confidence;
  }

}
