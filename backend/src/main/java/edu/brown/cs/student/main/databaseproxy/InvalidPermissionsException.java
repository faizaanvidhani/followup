package edu.brown.cs.student.databaseproxy;

/**
 * Class for an InvalidPermissionException, a specific exception for when a command
 * does not have the permissions necessary to be executed.
 */
public class InvalidPermissionsException extends Exception {

  /**
   * Constructor for InvalidPermissionsException.
   * @param msg a String indicating the error found
   */
  public InvalidPermissionsException(String msg) {
    super(msg);
  }
}
