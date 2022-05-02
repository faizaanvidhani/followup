package edu.brown.cs.student.db_proxy.PermissionTypes;

/**
 * Interface representing the three permission types.
 */
public interface IPermissions {
  /**
   * Gets the symbol of the permission represented as an ENUM.
   *
   * @return a PermissionSymbol ENUM
   */
  PermissionSymbol getSymbol();

  /**
   * function to see if a permission allows read.
   *
   * @return true if read permission is allowed, false otherwise
   */
  boolean read();

  /**
   * function to see if a permission allows write.
   *
   * @return true if write permission is allowed, false otherwise
   */
  boolean write();

  /**
   * checks the equality of two permissions based on their ENUM value.
   *
   * @param s the ENUM of the permission being compared
   * @return true if the tow values are the same, false otherwise
   */
  boolean equals(PermissionSymbol s);

  /**
   * Function to represent the permission as a String.
   *
   * @return the ENUM value in string form
   */
  String toString();
}
