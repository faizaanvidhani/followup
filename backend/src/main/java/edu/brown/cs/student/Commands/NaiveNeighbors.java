package edu.brown.cs.student.Commands;

import edu.brown.cs.student.Data.StarClass;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * naive neighbors class.
 */
public final class NaiveNeighbors implements ICommand {
  /**
   * method that looks at the list of stars to see if a star with the given star name
   * exists or not, and if so, remove it from the list.
   *
   * @param starName   - the name of the star to search for in our list
   * @param lstOfStars - the list of stars, each represented as a StarClass
   * @return the star with the given name if found, null otherwise
   */
  public StarClass getStar(String starName, ArrayList<StarClass> lstOfStars) {
    StarClass starToRemove = null;
    int indexToRemove = 0;
    boolean found = false;
    for (int j = 0; j < lstOfStars.size(); j++) {
      if (lstOfStars.get(j).getName().equals(starName)) {
        indexToRemove = j;
        found = true;
      }
    }
    if (found) {
      starToRemove = lstOfStars.get(indexToRemove);
      lstOfStars.remove(indexToRemove);
    }
    return starToRemove;
  }

  /**
   * This method sorts the list based on how near it is from coordinate (x, y, z), and prints the
   * k nearest ones.
   *
   * @param k          - the number of nearest neighbors to print out
   * @param x          - the x coordinate of the position on which to calculate our distance
   * @param y          - the y coordinate of the position on which to calculate our distance
   * @param z          - the z coordinate of the position on which to calculate our distance
   * @param lstOfStars - the list of stars represented as StarClasses
   */
  private void nearestStars(int k, double x, double y, double z, ArrayList<StarClass> lstOfStars) {
    if (k < 0) {
      System.out.println("ERROR: second argument must be a non-negative number");
    }
    /*
     * sort the lstOfStars based on distance from our given star
     */
    lstOfStars.sort(new Compare(x, y, z));
    /*
     * get the first k from the lstOfStars
     */
    if (k < lstOfStars.size()) {
      for (int i = 0; i < k; i++) {
        System.out.println(lstOfStars.get(i).getStarID());
      }
    } else {
      // just return all of them
      for (StarClass star : lstOfStars) {
        System.out.println(star.getStarID());
      }
    }
  }

  @Override
  @SuppressWarnings("unchecked")
  public void runCommand(ArrayList<String> tokens, HashMap<String, Object> dataHM) {
    // get the list of stars from the hashmap
    ArrayList<StarClass> stars = (ArrayList<StarClass>) dataHM.get("stars");
    if (stars.isEmpty()) {
      System.out.println("ERROR: must read in csv file first");
    } else {
      if (tokens.size() == 5) {
        // check that k is non-negative, integral number
        try {
          int k = Integer.parseInt(tokens.get(1));
          double x = Float.parseFloat(tokens.get(2));
          double y = Float.parseFloat(tokens.get(3));
          double z = Float.parseFloat(tokens.get(4));
          nearestStars(k, x, y, z, stars);
        } catch (NumberFormatException e) {
          System.out.println("ERROR: " + e);
        }
      } else if (tokens.size() == 3) {
        // remove star from list
        StarClass star = getStar(tokens.get(2).split("\"")[1], stars);
        if (star == null) {
          System.out.println("ERROR: a star with that name doesn't exist");
        } else {
          try {
            int k = Integer.parseInt(tokens.get(1));
            nearestStars(k, star.getX(), star.getY(), star.getZ(), stars);
          } catch (NumberFormatException e) {
            System.out.println("ERROR: " + e);
          }
        }
      } else {
        System.out.println("ERROR: must read in csv file first");
      }
    }
  }
}
