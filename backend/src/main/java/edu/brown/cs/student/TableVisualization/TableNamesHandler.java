package edu.brown.cs.student.TableVisualization;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.List;
import java.util.Map;

/**
 * Handles requests for loading the table names of a database.
 */
public class TableNamesHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      TableLoader tp = new TableLoader(filePath);
      Map<String, List<String>> nameMap = tp.getTableNamesMap();

      System.out.println("Loaded database at " + filePath + "\n" + nameMap);

      Gson gson = new Gson();
      return gson.toJson(nameMap);

    } catch (Exception e) {
      System.out.println("ERROR: " + e.getMessage());
      return "";
    }
  }

  /**
   * Setter for the filePath field.
   *
   * @param file - a string, the file to the database
   */
  public static void setFilePath(String file) {
    filePath = file;
  }

}
