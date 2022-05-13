package edu.brown.cs.student.ApiProxy;

/**
 * class for student info.
 */
public class StudentInfo implements Student {
  private int id;
  private String name;
  private String classYear;
  private int yearsExperience;
  private String communicationStyle;
  private int weeklyAvailHours;
  private String meetingStyle;
  private String meetingTime;

  /**
   * constructor of class.
   * @param id the id
   * @param name the name
   * @param classYear the year
   * @param yearsExperience the exp
   * @param communicationStyle the communication
   * @param weeklyAvailHours the weekly hours
   * @param meetingStyle the meeting style
   * @param meetingTime the time
   */
  public StudentInfo(int id, String name, String classYear, int yearsExperience,
                     String communicationStyle, int weeklyAvailHours,
                     String meetingStyle, String meetingTime) {
    this.id = id;
    this.name = name;
    this.classYear = classYear;
    this.yearsExperience = yearsExperience;
    this.communicationStyle = communicationStyle;
    this.weeklyAvailHours = weeklyAvailHours;
    this.meetingStyle = meetingStyle;
    this.meetingTime = meetingTime;
  }

  /**
   * the getter for the id.
   * @return the id
   */
  public int getId() {
    return id;
  }

  /**
   * the getter for the name.
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * the getter for the class year.
   * @return class year
   */
  public String getClassYear() {
    return classYear;
  }

  /**
   * getter for years of exp.
   * @return exp
   */
  public int getYearsExperience() {
    return yearsExperience;
  }

  /**
   * getter for cs.
   * @return cs
   */
  public String getCommunicationStyle() {
    return communicationStyle;
  }

  /**
   * getter for hours.
   * @return hours
   */
  public int getWeeklyAvailHours() {
    return weeklyAvailHours;
  }

  /**
   * meeting style.
   * @return ms
   */
  public String getMeetingStyle() {
    return meetingStyle;
  }

  /**
   * get meeting time.
   * @return mt
   */
  public String getMeetingTime() {
    return meetingTime;
  }
}
