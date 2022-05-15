package edu.brown.cs.student.userLoader;

import com.google.gson.Gson;
import edu.brown.cs.student.users.User;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

/**
 * Handles requests for loading the contents for a database containing kanban data.
 */
public class UserHandler implements Route {

  private static String filePath;

  @Override
  public String handle(Request req, Response res) {
    try {
      UserDataLoader udl = new UserDataLoader(filePath);

      Gson gson = new Gson();
      return gson.toJson(udl.getUserData());

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
