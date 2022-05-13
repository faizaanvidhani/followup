package edu.brown.cs.student.ApiProxy;

import java.net.URI;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * This class generates the HttpRequests that are then used to make requests from the ApiClient.
 */
public final class ClientRequestGenerator {

  /**
   * private constructor.
   */
  private ClientRequestGenerator() {

  }

  /**
   * gets active end points.
   * @param input the type
   * @return the request
   */
  public static HttpRequest getActiveEndPoints(String input) {
    String reqUri = "https://student" + input + "api.herokuapp.com/get-active";
    HttpRequest request = HttpRequest.newBuilder().uri(URI.create(reqUri)).build();
    return request;
  }

  /**
   * get request.
   * @param reqUri the url
   * @return the request
   */
  public static HttpRequest getSecuredGetRequest(String reqUri) {
    reqUri = reqUri + "?auth=" + ClientAuth.getUsername() + "&key=" + ClientAuth.getApiKey();
    HttpRequest request = HttpRequest.newBuilder().uri(URI.create(reqUri)).
        setHeader("x-api-key", ClientAuth.getApiKey()).build();
    return request;
  }

  /**
   * post request.
   * @param reqUri the url
   * @param parameters the parameters.
   * @return the request
   * @throws RuntimeException throws exception
   */
  public static HttpRequest getSecuredPostRequest(String reqUri, String parameters)
      throws RuntimeException {
    String[] parameterSplit = validateParameter(parameters);
    reqUri = reqUri + "?auth=" + ClientAuth.getUsername() + "&key=" + ClientAuth.getApiKey();
    HttpRequest request = HttpRequest.newBuilder().uri(URI.create(reqUri)).
        header(parameterSplit[1], parameterSplit[2]).
        POST(HttpRequest.BodyPublishers.
            ofString("{\"" + parameterSplit[4] + "\":\"" + parameterSplit[5] + "\"}"))
        .build();
    return request;
  }

  /**
   * checks if param are valid.
   * @param parameters the parameters
   * @return the valid parameters parsed
   */
  public static String[] validateParameter(String parameters) {
    String[] headerBodySplit = parameters.split(";");
    if (headerBodySplit.length != 2) {
      throw new RuntimeException();
    }
    String[] header = headerBodySplit[1].split(":");
    if (header.length != 3) {
      throw new RuntimeException();
    }
    String[] body = headerBodySplit[0].split(":");
    if (body.length != 3) {
      throw new RuntimeException();
    }
    if (!body[0].equals("body") || !body[1].equals("auth")) {
      throw new RuntimeException();
    }
    if (!header[0].equals("header") || !header[1].equals("x-api-key")) {
      throw new RuntimeException();
    }
    ArrayList<String> list = new ArrayList(Arrays.asList(header));
    list.addAll(Arrays.asList(body));
    String[] output = new String[list.size()];
    output = list.toArray(output);
    return output;
  }
}
