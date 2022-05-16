package edu.brown.cs.student.db_proxy.PermissionTypes;

import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.R;

/**
 * Class representing the read permission.
 */
public class ReadPermission implements IPermissions {
  private final PermissionSymbol permType;

  /**
   * Constructor, setting the permission type to R.
   */
  public ReadPermission() {
    this.permType = R;
  }

  @Override
  public PermissionSymbol getSymbol() {
    return permType;
  }

  @Override
  public boolean read() {
    return true;
  }

  @Override
  public boolean write() {
    return false;
  }

  @Override
  public boolean equals(PermissionSymbol s) {
    return this.permType == s;
  }

  @Override
  public String toString() {
    return permType.toString();
  }
}
