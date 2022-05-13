package edu.brown.cs.student.users;

public class Provider {

  private final int provider_id;
  private final String first_name;
  private final String last_name;
  private final String email;
  private final String phone_number;
  private final int clinic_id;

  public Provider(int provider_id, String first_name, String last_name,
                 String email, String phone_number, int clinic_id ) {
    this.provider_id = provider_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.clinic_id = clinic_id;
  }

  public int getProviderID() {
    return this.provider_id;
  }

  public String getFirstName() {
    return this.first_name;
  }

  public String getLastName() {
    return this.last_name;
  }

  public String getEmail() {
    return this.email;
  }

  public String getPhoneNumber() {
    return this.phone_number;
  }

  public int getClinicID() {
    return this.clinic_id;
  }

}
