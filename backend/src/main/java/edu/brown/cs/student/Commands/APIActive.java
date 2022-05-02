package edu.brown.cs.student.Commands;

import com.google.gson.Gson;
import edu.brown.cs.student.ApiProxy.ApiClient;
import edu.brown.cs.student.ApiProxy.ClientRequestGenerator;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * api active class.
 */
public class APIActive implements ICommand {
  private static final int THREEHUNDRED = 300;
  @Override
  /**
   * run command method.
   */
  public void runCommand(ArrayList<String> arr, HashMap<String, Object> dataMap) {
    if (arr.size() == 2) {
      if (arr.get(1).equals("info") || arr.get(1).equals("match")) {
        ApiClient client = new ApiClient();
        try {
          HttpResponse<String> activeEndPoints =
              client.makeRequest(ClientRequestGenerator.getActiveEndPoints(arr.get(1)));
          if ((activeEndPoints.statusCode() >= 200)
              && (activeEndPoints.statusCode() < THREEHUNDRED)) {
            System.out.println(activeEndPoints.body());
            String[] activeEndPointsList =
                new Gson().fromJson(activeEndPoints.body(), String[].class);
            dataMap.put("endpoints", activeEndPointsList);
          } else {
            System.out.println("ERROR: Bad status code" + activeEndPoints.statusCode());
          }
        } catch (IOException ioe) {
          System.out.print("ERROR: An I/O error occurred when sending or receiving data:");
          System.out.println(ioe.getMessage());
        } catch (InterruptedException ie) {
          System.out.print("ERROR: The operation was interrupted:");
          System.out.println(ie.getMessage());
        } catch (IllegalArgumentException iae) {
          System.out.print(
              "ERROR: The request argument was invalid. It must be built as specified by "
              + "HttpRequest.Builder:");
          System.out.println(iae.getMessage());
        } catch (SecurityException se) {
          System.out.print("ERROR: There was a security configuration error:");
          System.out.println(se.getMessage());
        }
      } else {
        System.out.println("ERROR: Invalid second argument to command");
      }
    } else {
      System.out.println("ERROR: Invalid arguments to command");
    }
  }
}
