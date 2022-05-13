package edu.brown.cs.student.symptomLoader;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.List;
import java.util.Map;

/**
 * Handles requests for loading the contents for a database containing kanban data.
 */
public class SymptomDataHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      SymptomLoader pd = new SymptomLoader(filePath);
      List<Map<String, String>> symptomData = pd.getSymptomData();

      System.out.println("Loaded database at " + filePath + "\n" + symptomData);

      Gson gson = new Gson();
      return gson.toJson(symptomData);

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
