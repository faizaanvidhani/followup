package edu.brown.cs.student.db_proxy.PermissionTypes;

import static edu.brown.cs.student.db_proxy.PermissionTypes.PermissionSymbol.W;

/**
 * Class representing ReadWrite permission.
 */
public class WritePermission implements IPermissions {
  private final PermissionSymbol permType;

  /**
   * Constructor, setting the permission type to W.
   */
  public WritePermission() {
    this.permType = W;
  }

  @Override
  public PermissionSymbol getSymbol() {
    return permType;
  }

  @Override
  public boolean read() {
    return false;
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
