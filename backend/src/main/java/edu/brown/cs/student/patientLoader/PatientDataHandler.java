package edu.brown.cs.student.patientLoader;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.List;
import java.util.Map;

/**
 * Handles requests for loading the contents for a database containing kanban data.
 */
public class PatientDataHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      PatientLoader pd = new PatientLoader(filePath);
      List<Map<String, String>> patientData = pd.getPatientData();

      System.out.println("Loaded database at " + filePath + "\n" + patientData);

      Gson gson = new Gson();
      return gson.toJson(patientData);

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
