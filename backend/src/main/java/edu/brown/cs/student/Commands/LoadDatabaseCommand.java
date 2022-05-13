package edu.brown.cs.student.Commands;

import edu.brown.cs.student.KanbanVisualization.KanbanDataHandler;
import edu.brown.cs.student.TableVisualization.DeleteHandler;
import edu.brown.cs.student.TableVisualization.InsertHandler;
import edu.brown.cs.student.TableVisualization.TableDataHandler;
import edu.brown.cs.student.TableVisualization.TableNamesHandler;
import edu.brown.cs.student.TableVisualization.UpdateHandler;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Handles the load_database command.
 */
public class LoadDatabaseCommand implements ICommand {

  @Override
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    if (inputTokens.size() != 2) {
      System.out.println("ERROR: Incorrect number of arguments for load_database");
    } else {
      TableNamesHandler.setFilePath(inputTokens.get(1));
      TableDataHandler.setFilePath(inputTokens.get(1));
      InsertHandler.setFilePath(inputTokens.get(1));
      DeleteHandler.setFilePath(inputTokens.get(1));
      UpdateHandler.setFilePath(inputTokens.get(1));
      KanbanDataHandler.setFilePath(inputTokens.get(1));
    }
  }

  // return list of cards

}

