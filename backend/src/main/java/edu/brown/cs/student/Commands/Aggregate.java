package edu.brown.cs.student.Commands;

import edu.brown.cs.student.ApiProxy.ApiAggregator;
import edu.brown.cs.student.ApiProxy.Student;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * class for aggregate.
 */
public class Aggregate implements ICommand {
  @Override
  /**
   * run command.
   */
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    if (inputTokens.size() == 2) {
      try {
        ApiAggregator aggregator = new ApiAggregator(inputTokens.get(1));
        aggregator.setEndpoints();
        List<Student> aggregatedData = aggregator.aggregate();
        dataHM.put("aggregated data", aggregatedData);
        System.out.println("Aggregated " + aggregatedData.size() + " students");
      } catch (RuntimeException e) {
        System.out.println("ERROR: Wrong type in aggregator");
      }
    } else {
      System.out.println("ERROR: Invalid number of arguments");
    }
  }
}
