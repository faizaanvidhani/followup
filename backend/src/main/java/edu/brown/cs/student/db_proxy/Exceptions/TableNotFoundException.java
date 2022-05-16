package edu.brown.cs.student.db_proxy.Exceptions;

/**
 * Exception for when a table does not exist.
 */
public class TableNotFoundException extends Exception {
  /**
   * Constructor for the TableNotFoundException.
   * @param errorMessage the error message for the error
   */
  public TableNotFoundException(String errorMessage) {
    super(errorMessage);
  }
}
