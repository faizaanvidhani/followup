package edu.brown.cs.student.db_proxy.PermissionTypes;

import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.RW;

/**
 * Class representing ReadWrite permission.
 */
public class ReadWritePermission implements IPermissions {
  private final PermissionSymbol permType;

  /**
   * Constructor, setting the permission type to RW.
   */
  public ReadWritePermission() {
    this.permType = RW;
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
    return true;
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
