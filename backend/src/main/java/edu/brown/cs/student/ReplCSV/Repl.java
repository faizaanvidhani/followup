package edu.brown.cs.student.ReplCSV;

import edu.brown.cs.student.Commands.CreateConnectionCommand;
import edu.brown.cs.student.Commands.ICommand;
import edu.brown.cs.student.Commands.LoadDatabaseCommand;
import edu.brown.cs.student.Commands.RunSQLCommand;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Generic Repl that reads in user input command and calls the correct method of the corresponding
 * class.
 *
 * @author taishinishizawa
 */
public class Repl {
  /**
   * Hashmap that keeps track of all the commands.
   */
  private final HashMap<String, ICommand> commandsHM = new HashMap<>();

  /**
   * Method that adds a new class that implements the ICommand interface into our hashmap
   * commandsHM.
   *
   * @param commandName  - String that represents the name of our command.
   * @param commandClass - Class inheriting ICommand that would represent the class of the command
   *                     to add
   */
  public void addCommand(String commandName, ICommand commandClass) {
    this.commandsHM.put(commandName, commandClass);
  }

  /**
   * getter method for commandHM.
   *
   * @return this.commandsHM
   */
  public HashMap<String, ICommand> getCommandsHM() {
    return this.commandsHM;
  }

  /**
   * the main() method handles all the repl functionality.
   *
   * @throws IOException input or output error during the repl
   */
  public void main() throws IOException {
    // adding stars and naive_neighbors here for reference and so we can use them
    addCommand("run_sql", new RunSQLCommand());
    addCommand("load_database", new LoadDatabaseCommand());
    /*
     * instantiate the hashmap that would store all the data that gets passed along by
     * classes implementing ICommand, such as Stars or LoadKDTree
     */
    HashMap<String, Object> dataHM = new HashMap<String, Object>();

    Pattern regex = Pattern.compile("[^\\s\"']+|\"[^\"]*\"|'[^']*'");
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
//    String line = reader.readLine();
    String line = "load_database ../data/followup_data.db";

    while (line != null) {
      if (line.equals("")) {
        System.out.println("new line is not valid input");
        line = reader.readLine();
        continue;
      }
      ArrayList<String> inputTokens = new ArrayList<String>();
      Matcher regexMatcher = regex.matcher(line);
      while (regexMatcher.find()) {
        inputTokens.add(regexMatcher.group());
      }
      if (this.commandsHM.containsKey(inputTokens.get(0))) {
        /*
        call the runCommand method of a class that inherits the ICommand interface
         */
        this.commandsHM.get(inputTokens.get(0)).runCommand(inputTokens, dataHM);

      } else {
        System.out.println("ERROR: invalid command input for arg[0]");
      }
      line = reader.readLine();
    }
    reader.close();
  }
}
