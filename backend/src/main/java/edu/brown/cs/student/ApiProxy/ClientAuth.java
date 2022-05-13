package edu.brown.cs.student.ApiProxy;

/**
 * This simple class is for reading the API Key from your secret file
 * (THAT SHOULD NOT BE PUSHED TO GIT).
 */
public final class ClientAuth {

  /**
   * private constructor.
   */
  private ClientAuth() {

  }
  /**
   * Reads the API Key from the secret text file where we have stored it. Refer to the handout
   * for more on security
   * practices.
   *
   * @return a String of the api key.
   */
  public static String getApiKey() {
    FileParser parser = new FileParser("config/secret/apikey.txt");
    return parser.readNewLine();
  }

  /**
   * gets the username.
   * @return the username
   */
  public static String getUsername() {
    FileParser parser = new FileParser("config/secret/username.txt");
    return parser.readNewLine();
  }
}
