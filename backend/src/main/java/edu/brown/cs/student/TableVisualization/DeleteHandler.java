package edu.brown.cs.student.TableVisualization;

import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

import java.sql.SQLException;

/**
 * Class for delete route.
 */
public class DeleteHandler implements Route {
  private static String filePath;

  /**
   * Handle method overrriden from the route interface. This handle receives the objects from the
   * request body, which are the table name and a HashMap describing the inserted entry.
   *
   * @param request  request object from the caller
   * @param response response object
   * @return JSON string describing the result of the request.
   * @throws Exception
   */
  @Override
  public String handle(Request request, Response response) throws Exception {
    TableLoader tb = new TableLoader(filePath);
    JSONObject data = new JSONObject(request.body());
    String tableName = data.getString("tableName");
    String rowData = data.getString("rowValues");
    tb.fillTableDataMap(tableName);
    try {
      tb.deleteRow(tableName, rowData);
    } catch (SQLException e) {
      System.out.println(e.getMessage());
      return e.getMessage();
    }
    System.out.println("Successfully deleted from the table");
    return "Successfully deleted from the table";
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



