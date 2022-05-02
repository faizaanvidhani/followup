package edu.brown.cs.student.Commands;

import edu.brown.cs.student.Data.StarClass;

import java.util.Comparator;
import java.util.Random;

/**
 * compare class.
 */
public class Compare implements Comparator<StarClass> {
  private double x;
  private double y;
  private double z;

  /**
   * constructor for compare.
   * @param x - x coordinate
   * @param y - y coordinate
   * @param z - z coordinate
   */
  public Compare(double x, double y, double z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * method calculates the squared value of the 'distance' between the star with coordinates
   * x, y, z and a given star. We don't square root the value to get the actual value to save
   * computation.
   *
   * @param star - the star we want to calculate the squared distance of, represented as a StarClass
   * @return - the squared distance represented as a double
   */
  private double calculateDistance(StarClass star) {
    return Math.pow(x - star.getX(), 2) + Math.pow(y - star.getY(), 2)
        + Math.pow(z - star.getZ(), 2);
  }

  @Override
  public int compare(StarClass star1, StarClass star2) {
    double distance1 = calculateDistance(star1);
    double distance2 = calculateDistance(star2);

    if (distance1 > distance2) {
      return 1;
    } else if (distance1 == distance2) {
      // randomly decide which star to deem "farther away"
      Random rnd = new Random();
      // this either assigns rndInt a 1 or 0
      int rndInt = rnd.nextInt(2);
      if (rndInt == 1) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
}
