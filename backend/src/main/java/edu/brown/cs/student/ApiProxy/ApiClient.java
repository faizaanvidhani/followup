package edu.brown.cs.student.ApiProxy;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

/**
 * Client api class.
 */
public class ApiClient {

  private HttpClient client;

  /**
   * Constructor of class.
   */
  public ApiClient() {
    this.client = HttpClient.newBuilder()
        .version(HttpClient.Version.HTTP_2)
        .build();
  }

  /**
   * function that makes the request.
   * @param req the htt request with which to make the request
   * @return the request
   * @throws IOException to be handled exception
   * @throws InterruptedException to be handled exception
   * @throws SecurityException to be handled exception
   * @throws IllegalArgumentException to be handled exception
   */
  public HttpResponse<String> makeRequest(HttpRequest req) throws IOException, InterruptedException,
      SecurityException, IllegalArgumentException {
    HttpResponse<String> apiResponse = client.send(req, HttpResponse.BodyHandlers.ofString());
    return apiResponse;
  }
}
