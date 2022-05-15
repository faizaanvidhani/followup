package edu.brown.cs.student.Commands;

import edu.brown.cs.student.KanbanVisualization.KanbanDataHandler;
import edu.brown.cs.student.TableVisualization.*;
import edu.brown.cs.student.patientLoader.PatientDataHandler;
import edu.brown.cs.student.symptomLoader.SymptomInsertHandler;
import edu.brown.cs.student.tableDataLoader.TableHandler;
import edu.brown.cs.student.providerLoader.ProviderDataHandler;
import edu.brown.cs.student.symptomLoader.SymptomDataHandler;
import edu.brown.cs.student.userLoader.UserHandler;

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
      ProviderDataHandler.setFilePath(inputTokens.get(1));
      PatientDataHandler.setFilePath(inputTokens.get(1));
      TableHandler.setFilePath(inputTokens.get(1));
      SymptomDataHandler.setFilePath(inputTokens.get(1));
      SymptomInsertHandler.setFilePath(inputTokens.get(1));
      UserHandler.setFilePath(inputTokens.get(1));
    }
  }


}

