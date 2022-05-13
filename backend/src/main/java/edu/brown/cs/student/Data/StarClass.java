package edu.brown.cs.student.Data;

import java.util.List;

/**
 * Class that represents a Star.
 *
 * @author taishinishizawa
 */
public final class StarClass {
  /*
   * a field representing the id of the star
   */
  private final int starID;
  /*
   * a field representing the name of the star
   */
  private final String name;
  /*
   * field representing the X coordinate of the star
   */
  private final double x;
  /*
   * field representing the Y coordinate of the star
   */
  private final double y;
  /*
   * field representing the Z coordinate of the star
   */
  private final double z;

  /**
   * CONSTRUCTOR 1: TAKES IN EACH ARGUMENT SEPARATELY.
   *
   * @param starID - represents the id of the star
   * @param name   - represents the name of the star
   * @param x      - represents the x coordinate of the star
   * @param y      - represents the y coordinate of the star
   * @param z      - represents the z coordinate of the star
   */
  public StarClass(String starID, String name, String x, String y, String z) {
    this.starID = Integer.parseInt(starID);
    this.name = name;
    this.x = Double.parseDouble(x);
    this.y = Double.parseDouble(y);
    this.z = Double.parseDouble(z);
  }

  /**
   * CONSTRUCTOR 2: TAKES IN THE ARGUMENT AS A LIST (used in IDataInstantiator).
   *
   * @param arguments a list containing the five Strings, representing starID, name, x, y, and
   *                  z. The list will always conform to this requirement because this
   *                  constructor will only be called after we have checked for the correct
   *                  arguments in CSVParser.
   */
  public StarClass(List<String> arguments) {
    this.starID = Integer.parseInt(arguments.get(0));
    this.name = arguments.get(1);
    this.x = Double.parseDouble(arguments.get(2));
    this.y = Double.parseDouble(arguments.get(3));
    this.z = Double.parseDouble(arguments.get(4));
  }

  /**
   * Getter method for accessing the starID of the star.
   *
   * @return - int representing the starID of the star
   */
  public int getStarID() {
    return starID;
  }

  /**
   * Getter method for accessing the name of the star.
   *
   * @return - String representing the name of the star
   */
  public String getName() {
    return name;
  }

  /**
   * Getter method for returning the x coordinate of the star.
   *
   * @return double representing the x coordinate
   */
  public double getX() {
    return this.x;
  }

  /**
   * Getter method for returning the y coordinate of the star.
   *
   * @return double representing the y coordinate
   */
  public double getY() {
    return this.y;
  }

  /**
   * Getter method for returning the z coordinate of the star.
   *
   * @return double representing the z coordinate
   */
  public double getZ() {
    return this.z;
  }
}
