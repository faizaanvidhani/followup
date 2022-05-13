package edu.brown.cs.student.Commands;

import edu.brown.cs.student.ApiProxy.ApiClient;
import edu.brown.cs.student.ApiProxy.ClientRequestGenerator;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * api command class.
 */
public class APICommand implements ICommand {
  private static final int THREEHUNDRED = 300;
  @Override
  /**
   * run command function.
   */
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    if (inputTokens.size() == 3 || inputTokens.size() == 4) {
      try {
        if (inputTokens.get(1).equals("GET") && inputTokens.size() == 3) {
          ApiClient client = new ApiClient();
          HttpResponse<String> get = client.
              makeRequest(ClientRequestGenerator.getSecuredGetRequest(inputTokens.get(2)));
          if ((get.statusCode() >= 200) && (get.statusCode() < THREEHUNDRED)) {
            System.out.println(get.body());
          } else {
            System.out.println("ERROR: Bad status code" + get.statusCode());
          }
        } else if (inputTokens.get(1).equals("POST") && inputTokens.size() == 4) {
          ApiClient client = new ApiClient();
          try {
            HttpResponse<String> post = client.makeRequest(
                ClientRequestGenerator.getSecuredPostRequest(inputTokens.get(2),
                    inputTokens.get(3)));
            if ((post.statusCode() >= 200) && (post.statusCode() < THREEHUNDRED)) {
              System.out.println(post.body());
            } else {
              System.out.println("ERROR: Bad status code" + post.statusCode());
            }
          } catch (RuntimeException e) {
            System.out.println("ERROR: Parameters is wrong format");
          }
        } else {
          System.out.println("ERROR: Invalid method or wrong number of args for method");
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
      System.out.println("ERROR: incorrect number of arguments");
    }
  }
}
