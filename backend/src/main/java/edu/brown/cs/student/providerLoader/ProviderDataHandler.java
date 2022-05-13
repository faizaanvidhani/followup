package edu.brown.cs.student.providerLoader;

import com.google.gson.Gson;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

/**
 * Handles requests for loading the table contents for one table of a database.
 */
public class ProviderDataHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      // Put the request's body in JSON format
      JSONObject reqJson = new JSONObject(req.body());
      String providerID = reqJson.getString("provider_id"); // the requested table to load in

      ProviderLoader tp = new ProviderLoader(filePath);
      tp.fillProviderData(providerID);

      // only print if there was a valid table from the database to load
      if (!providerID.equals("")) {
        System.out.println("Loaded provider" + providerID + " data");
      }

      Gson gson = new Gson();
      return gson.toJson(tp.getProviderData());

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
