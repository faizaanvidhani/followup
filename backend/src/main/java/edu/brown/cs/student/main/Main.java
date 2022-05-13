package edu.brown.cs.student.main;

import edu.brown.cs.student.ReplCSV.Repl;
import edu.brown.cs.student.KanbanVisualization.KanbanDataHandler;
import edu.brown.cs.student.TableVisualization.*;
import edu.brown.cs.student.patientLoader.PatientDataHandler;
import edu.brown.cs.student.providerLoader.ProviderDataHandler;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
import spark.Spark;

import java.io.IOException;

/**
 * The Main class of our project. This is where execution begins.
 *
 */
public final class Main {

  private static final int DEFAULT_PORT = 4567;

  /**
   * The initial method called when execution begins.
   *
   * @param args An array of command line arguments
   */
  public static void main(String[] args) {
    new Main(args).run();
  }

  private final String[] args;

  private Main(String[] args) {
    this.args = args;
  }

  private void run() {

    OptionParser parser = new OptionParser();
    parser.accepts("gui");
    parser.accepts("port").withRequiredArg().ofType(Integer.class).defaultsTo(DEFAULT_PORT);

    OptionSet options = parser.parse(args);

    if (options.has("gui")) {
      runSparkServer((int) options.valueOf("port"));
    }

    // running the REPL
    Repl ourRepl = new Repl();
    try {
      ourRepl.main();
    } catch (IOException e) {
      System.out.println("IO error");
    }
  }

  /**
   * Runs the Spark server and allows for routes to be mapped.
   * @param port - an int, the port the server will run on
   */
  public static void runSparkServer(int port) {
    Spark.port(port);
    Spark.externalStaticFileLocation("src/main/resources/static");

    Spark.options("/*", (request, response) -> {
      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

    // routes
    Spark.get("/kanban", new KanbanDataHandler());
    Spark.get("/table-names", new TableNamesHandler());
    Spark.post("/table-data", new TableDataHandler());
    Spark.post("/insert", new InsertHandler());
    Spark.post("/delete", new DeleteHandler());
    Spark.post("/update", new UpdateHandler());
    Spark.post("/provider-data", new ProviderDataHandler());
    Spark.get("/patient-data", new PatientDataHandler());
    Spark.init();
  }

}

