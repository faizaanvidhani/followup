package main.java.edu.brown.cs.student.repl;

import java.io.IOException;
import java.util.List;

/**
 * This interface is used for commands.
 * Commandable objects can take in a command with its parameters,
 * and then it executes something different based off of the different
 * commands that have been passed in.
 */
public interface Commandable {
  /**
   * This method is used to execute the given command.
   * @param command The name of the command (i.e stars)
   * @param args The arguments of the command. Based off a parsed user input
   *             in the command line. This also contains the name of the command.
   * @return Boolean that represents whether the edu.brown.cs.student.repl should continue or not.
   * True if the edu.brown.cs.student.repl should continue
   * False otherwise
   * @throws IOException if the command is used to read files and the filepath is invalid
   */
  boolean executeCommand(String command, List<String> args) throws IOException;
}
