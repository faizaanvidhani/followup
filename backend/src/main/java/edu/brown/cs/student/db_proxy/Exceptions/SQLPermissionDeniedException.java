package edu.brown.cs.student.db_proxy.Exceptions;

/**
 * Exception for when permissions are not met for an SQL query.
 */
public class SQLPermissionDeniedException extends Exception {
  /**
   * Constructor for the SQLPermissionDeniedException.
   * @param errorMessage the error message for the error
   */
  public SQLPermissionDeniedException(String errorMessage) {
    super(errorMessage);
  }
}
