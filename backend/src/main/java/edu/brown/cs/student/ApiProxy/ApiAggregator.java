package edu.brown.cs.student.ApiProxy;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * class for the apiaggreagtor.
 */
public class ApiAggregator {
  private String type;
  private String[] activeEndpoints;
  public static final String INFO = "https://studentinfoapi.herokuapp.com";
  public static final String MATCH = "https://studentmatchapi.herokuapp.com";
  public static final int TWOHUNDRED = 200;
  public static final int THREEHUNDRED = 300;

  /**
   * Constructor for the class.
   * @param type String for type
   */
  public ApiAggregator(String type) {
    if (!type.equals("info") && !type.equals("match")) {
      throw new RuntimeException();
    }
    this.type = type;
    this.activeEndpoints = null;
  }

  /**
   * Function that sets the endpoints.
   */
  public void setEndpoints() {
    try {
      ApiClient client = new ApiClient();
      HttpResponse<String> activeEndPoints =
          client.makeRequest(ClientRequestGenerator.getActiveEndPoints(this.type));
      if ((activeEndPoints.statusCode() >= TWOHUNDRED)
          && (activeEndPoints.statusCode() < THREEHUNDRED)) {
        activeEndpoints = new Gson().fromJson(activeEndPoints.body(), String[].class);
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
  }

  /**
   * Function the performs the aggregation.
   * @return the arrayList of aggregated students
   *
   */
  public ArrayList<Student> aggregate() {
    ArrayList<Student> output = new ArrayList<>();
    if (activeEndpoints == null) {
      System.out.println("ERROR: There are no active end points or they haven't been searched for");
    } else {
      try {
        if (type.equals("info")) {
          for (String endpoint : this.activeEndpoints) {
            int statuscode;
            do {
              ApiClient client = new ApiClient();
              HttpResponse<String> get =
                  client.makeRequest(ClientRequestGenerator.getSecuredGetRequest(INFO + endpoint));
              statuscode = get.statusCode();
              if ((get.statusCode() >= TWOHUNDRED) && (get.statusCode() < THREEHUNDRED)) {
                Student[] students = new GsonBuilder().
                    setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES).
                    create().fromJson(get.body(), StudentInfo[].class);
                output.addAll(Arrays.asList(students));
              }
            } while (statuscode != TWOHUNDRED);
          }
        } else {
          for (String endpoint : this.activeEndpoints) {
            int statuscode;
            do {
              ApiClient client = new ApiClient();
              String parameters = "body:auth:" + ClientAuth.getUsername() + ";header:x-api-key:"
                  + ClientAuth.getApiKey();
              HttpResponse<String> post = client.makeRequest(
                  ClientRequestGenerator.getSecuredPostRequest(MATCH + endpoint, parameters));
              statuscode = post.statusCode();
              if ((post.statusCode() >= TWOHUNDRED) && (post.statusCode() < THREEHUNDRED)) {
                Student[] students = new GsonBuilder().
                    setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES).
                    create().fromJson(post.body(), StudentMatch[].class);
                output.addAll(Arrays.asList(students));
              }
            } while (statuscode != TWOHUNDRED);
          }
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
    }
    return output;
  }
}

