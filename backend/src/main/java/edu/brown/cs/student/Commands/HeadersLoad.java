package edu.brown.cs.student.Commands;

import edu.brown.cs.student.Data.Attribute;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * This class is used for the headers_load REPL command, which reads in a CSV file of header Names
 * and their respective attribute (either Qualitative or Quantitative), and stores that information
 * in a hashmap that can then be accessed by other classes.
 *
 * @author taishinishizawa
 */
public class HeadersLoad implements ICommand {
  /**
   * parseLine parses a single line and registers the relevant header name to its correct
   * category of either Qualitative or Quantitative.
   *
   * @param line             - a line of the csv file as a String. Would have header name and then
   *                         its attribute.
   * @param attributeHashMap - hashmap that stores whether a certain header is Qualitative or
   *                         Quantitative.
   */
  private void parseLine(String line, HashMap<String, Attribute> attributeHashMap) {
    String[] columns = line.split(",");
    String headerName = columns[0].toLowerCase();
    headerName = headerName.replaceAll("\\s+", "");
    String attribute = columns[1].toLowerCase().replaceAll("\\s+", "");

    if (attribute.equals("qualitative")) {
      attributeHashMap.put(headerName, Attribute.Qualitative);
//      if (headerName.charAt(headerName.length() - 1) == 's') {
//        headerName = headerName.substring(0, headerName.length() - 1);
//        attributeHashMap.put(headerName, Attribute.Qualitative);
//      }
    } else if (attribute.equals("quantitative")) {
      attributeHashMap.put(headerName, Attribute.Quantitative);
//      if (headerName.charAt(headerName.length() - 1) == 's') {
//        headerName = headerName.substring(0, headerName.length() - 1);
//        attributeHashMap.put(headerName, Attribute.Quantitative);
//      }
    } else {
      System.out.println(
          attribute + ": Column[1] value needs to be either qualitative or quantitative.");
    }
  }

  /**
   * parseCSV parses the given csv file and adds to the hashmap the correct categorization of
   * each header category as either Qualitative or Quantitative.
   *
   * @param fileName         - filename of the csv file, represented as a string
   * @param attributeHashMap - the hashmap that will store whether a trait is Qualitative
   *                         or Quantitative.
   */
  private void parseCSV(String fileName, HashMap<String, Attribute> attributeHashMap)
      throws FileNotFoundException, IOException {
    FileReader fReader;
    BufferedReader bReader;

    fReader = new FileReader(fileName);
    bReader = new BufferedReader(fReader);
    String line = bReader.readLine();
    // check header
    String[] csvHeader = line.split(",");
    if (csvHeader[0].equals("Header Name") && csvHeader[1].equals("Header Description")) {
      line = bReader.readLine();
      // call parseLine, which parses every line
      while (line != null) {
        parseLine(line, attributeHashMap);
        line = bReader.readLine();
      }
    }
    // close reader
    fReader.close();
    bReader.close();

  }

  @Override
  public void runCommand(ArrayList<String> inputTokens, HashMap<String, Object> dataHM) {
    // check that inputTokens is of size 2
    if (inputTokens.size() == 2) {
      String fileName = inputTokens.get(1);
      HashMap<String, Attribute> attributeHashMap = new HashMap<>();

      // parse csv
      try {
        parseCSV(fileName, attributeHashMap);
        dataHM.put("headers_load", attributeHashMap);
        System.out.println("Loaded header types.");
      } catch (FileNotFoundException e) {
        System.out.println("ERROR: file name is invalid");
      } catch (IOException e) {
        System.out.println("ERROR: I/O Error");
      }
    } else {
      System.out.println("ERROR: headers_load command needs to take in a file name");
    }
  }
}
