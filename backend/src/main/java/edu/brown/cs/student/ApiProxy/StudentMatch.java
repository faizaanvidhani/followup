package edu.brown.cs.student.ApiProxy;

/**
 * student match class.
 */
public class StudentMatch implements Student {
  private int id;
  private String name;
  private String gender;
  private String ssn;
  private String nationality;
  private String race;
  private int softwareEngnConfidence;

  /**
   * constructor.
   * @param id id
   * @param name name
   * @param gender gender
   * @param ssn ssn
   * @param nationality nationality
   * @param race race
   * @param softwareEngnConfidence confidence
   */
  public StudentMatch(int id, String name, String gender, String ssn, String nationality,
                      String race, int softwareEngnConfidence) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.ssn = ssn;
    this.nationality = nationality;
    this.race = race;
    this.softwareEngnConfidence = softwareEngnConfidence;
  }

  /**
   * getter for id.
   * @return id
   */
  public int getId() {
    return id;
  }

  /**
   * getter for name.
   * @return name
   */
  public String getName() {
    return name;
  }

  /**
   * getter for gender.
   * @return gender
   */
  public String getGender() {
    return gender;
  }

  /**
   * getter for ssn.
   * @return ssn
   */
  public String getSsn() {
    return ssn;
  }

  /**
   * getter for nationality.
   * @return nationality
   */
  public String getNationality() {
    return nationality;
  }

  /**
   * getter for race.
   * @return race
   */
  public String getRace() {
    return race;
  }

  /**
   * getter for confidence.
   * @return confidence
   */
  public int getSoftwareEngnConfidence() {
    return softwareEngnConfidence;
  }
}
