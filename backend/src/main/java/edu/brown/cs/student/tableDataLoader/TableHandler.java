package edu.brown.cs.student.tableDataLoader;

import com.google.gson.Gson;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

/**
 * Handles requests for loading the contents for a database containing kanban data.
 */
public class TableHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      JSONObject reqJson = new JSONObject(req.body());
      String tableName = reqJson.getString("table_name"); // the requested table to load in

      TableDataLoader tdl = new TableDataLoader(filePath);
      tdl.fillTableData(tableName);

      Gson gson = new Gson();
      return gson.toJson(tdl.getTableData());

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
