package edu.brown.cs.student.Commands;


import java.util.ArrayList;
import java.util.HashMap;

/**
 * interface ICommand that handles the command.
 *
 * @author taishinishizawa
 */
public interface ICommand {
  /**
   * command that handles the given command from the REPL.
   *
   * @param inputTokens - array containing the user input
   * @param dataHM      - hashmap containing the data we need
   */
  void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM);
}
