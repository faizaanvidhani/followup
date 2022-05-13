package edu.brown.cs.student.KanbanVisualization;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.List;
import java.util.Map;

/**
 * Handles requests for loading the contents for a database containing kanban data.
 */
public class KanbanDataHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      System.out.println(filePath);
      KanbanLoader kl = new KanbanLoader(filePath);
      List<Map<String, String>> kanbanData = kl.getKanbanData();

      System.out.println("Loaded database at " + filePath + "\n" + kanbanData);

      Gson gson = new Gson();
      return gson.toJson(kanbanData);

    } catch (Exception e) {
      System.out.println("ERROR: " + e.getMessage());
      e.printStackTrace();
      return "ERROR";
    }
  }

  /**
   * Setter for the filePath field.
   *
   * @param file - a string filepath to the database.
   */
  public static void setFilePath(String file) {
    filePath = file;
  }

}
