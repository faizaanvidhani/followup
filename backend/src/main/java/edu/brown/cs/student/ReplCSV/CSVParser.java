package edu.brown.cs.student.ReplCSV;

import edu.brown.cs.student.Data.IDataInstantiator;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Generic CSV Parser that reads in data from any CSV file and returns a list of objects of type
 * S representing the data.
 *
 * @param <S> The class that should represent a row's information
 * @author taishinishizawa
 */
public final class CSVParser<S> {
  /**
   * String representing the filename of the csv file to parse.
   */
  private final String fileName;
  /**
   * A list of strings representing the header line of the csv, ie the column headers.
   */
  private final List<String> header;
  /**
   * A list of Integers of the columns that we want to add as a field to the new Data object
   * we instantiate.
   */
  private final List<Integer> columns;
  /**
   * IDataInstantiator of type S to be used for instantiating for the object of type S.
   */
  private final IDataInstantiator<S> instantiator;


  /**
   * Constructor 1 for CSVParser. Used when we are specified the columns of the csv file to keep.
   * USED FOR LOAD_BF, LOAD_KD
   *
   * @param fileName     - String representing the filename of the csv file on which we want to
   *                     parse data
   * @param header       - what the header of the csv file should have, represented with a list
   *                     of Strings
   * @param columns      - the columns that will be actually be used, represented as a list
   *                     of Integers
   * @param instantiator - Interface that handles the instantiation
   */
  public CSVParser(String fileName, List<String> header, List<Integer> columns,
                   IDataInstantiator<S> instantiator) {
    this.fileName = fileName;
    this.header = header;
    this.columns = columns;
    this.instantiator = instantiator;
  }


  /**
   * Method that checks whether the csv file has the correct headers.
   * This method only gets called in readAll(), after we have already made sure that actualHeader
   * and this.header have the same size/length of elements.
   *
   * @param actualHeader - the header line (the first line of our csv file) on which to check
   * @return - boolean indicating whether our csv file has the same header as this.header
   */
  private boolean checkHeaders(String[] actualHeader) {
    for (int i = 0; i < actualHeader.length; i++) {
      if (!actualHeader[i].equals(this.header.get(i))) {
        return false;
      }
    }
    return true;
  }

  /**
   * This method takes in a row of the csv file as an array of strings, and then chooses which
   * columns of that row actually get kept, as indicated in the columns field.
   *
   * @param aRow - an array of strings representing a parsed row of the csv file
   * @return - a List of Strings containing only the relevant columns from aRow, as indicated by
   * columns.
   */
  private List<String> registerRow(String[] aRow) throws RuntimeException {
    List<String> registeredRow = new ArrayList<>();
    // check that the number of columns in the row matches the title column size
    if (aRow.length != this.header.size()) {
      throw new RuntimeException("ERROR: header of csv file doesn't match expectation.");
    } else {
      for (int i = 0; i < aRow.length; i++) {
        if (this.columns.contains(i)) {
          registeredRow.add(aRow[i]);
        }
      }
      return registeredRow;
    }
  }

  /**
   * <p>
   * method that reads in the content of the csv file "fileName".
   * - it uses bufferedReader, regex to read in the contents of the file
   * - while reading in the data (which will be done by rows), we create a new object of
   * class dataClass that should be representing that row of data, setting our fields of that field
   * corresponding to the columns
   * - it adds each to our list, which ultimately gets returned.
   * (for week 2; rn just Student)
   *
   * @return - a list of Student Objects, or null upon incorrect file name, header,
   * or IO Error.
   */
  public List<S> readAll() {
    /*
     * this is the list that we ultimately want to return.
     */
    ArrayList<S> lstOfData = new ArrayList<>();
    /*
    fileReader and BufferedReader for parsing the csv file. Any exceptions they raise should be
    caught in the try-catch.
     */
    FileReader fReader;
    BufferedReader bReader;
    try {
      fReader = new FileReader(this.fileName);
      bReader = new BufferedReader(fReader);
      String line = bReader.readLine();
      String[] actualHeader = line.split(",");
      /*
       * check that the header is correct by
       *  - comparing the header length/size
       *  - calling the helper method checkHeaders
       */
      if (actualHeader.length == this.header.size() && checkHeaders(actualHeader)) {


        // we get null here if end of file
        line = bReader.readLine();
        while (line != null) {
          /*
          regex reference: https://stackoverflow.com/questions/18893390/splitting-on-comma-outside-quotes
          split the data based on "," so that they're individual fields, but ignore for
          those inside quotes.
           */
          String[] aRow = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");
          /*
          Call registerRow to splice our array to keep only the required columns that we need
           */
          try {
            List<String> relevantData = this.registerRow(aRow);
            S rowObject = this.instantiator.instantiateClass(relevantData);
            lstOfData.add(rowObject);
          } catch (NumberFormatException e) {
            return null;
          } catch (IllegalArgumentException e) {
            System.out.println("ERROR: header of csv file doesn't match expectation.");
          }
          line = bReader.readLine();
        }
        return lstOfData;
      } else {
        System.out.println("ERROR: the input csv file doesn't have the correct header.");
      }
      // close reader
      fReader.close();
      bReader.close();
    } catch (FileNotFoundException e) {
      System.out.println("ERROR: file name is invalid");
    } catch (IOException e) {
      System.out.println("ERROR: I/O Error");
    }
    return null;
  }
}
