package edu.brown.cs.student.TableVisualization;

import com.google.gson.Gson;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

/**
 * Handles requests for loading the table contents for one table of a database.
 */
public class TableDataHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      // Put the request's body in JSON format
      JSONObject reqJson = new JSONObject(req.body());
      String tableName = reqJson.getString("tableToLoadName"); // the requested table to load in

      TableLoader tp = new TableLoader(filePath);
      tp.fillTableDataMap(tableName);

      // only print if there was a valid table from the database to load
      if (!tableName.equals("")) {
        System.out.println("Loaded " + tableName + " table");
      }

      Gson gson = new Gson();
      return gson.toJson(tp.getTableDataMap());

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
