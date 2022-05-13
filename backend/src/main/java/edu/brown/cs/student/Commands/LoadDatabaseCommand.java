package edu.brown.cs.student.Commands;

import edu.brown.cs.student.KanbanVisualization.KanbanDataHandler;
import edu.brown.cs.student.TableVisualization.DeleteHandler;
import edu.brown.cs.student.TableVisualization.InsertHandler;
import edu.brown.cs.student.TableVisualization.TableDataHandler;
import edu.brown.cs.student.TableVisualization.TableNamesHandler;
import edu.brown.cs.student.TableVisualization.UpdateHandler;
import edu.brown.cs.student.patientLoader.PatientDataHandler;
import edu.brown.cs.student.providerLoader.ProviderDataHandler;
import edu.brown.cs.student.symptomLoader.SymptomDataHandler;

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
      SymptomDataHandler.setFilePath(inputTokens.get(1));
    }
  }


}

