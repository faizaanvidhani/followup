package edu.brown.cs.student.db_proxy.Exceptions;

/**
 * Exception for when a command does not exist.
 */
public class CommandNotFoundException extends Exception {
  /**
   * Constructor for the CommandNotFoundException.
   * @param errorMessage the error message for the error
   */
  public CommandNotFoundException(String errorMessage) {
    super(errorMessage);
  }
}
