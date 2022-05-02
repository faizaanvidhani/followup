package main.java.edu.brown.cs.student.patient;

public class Patient {

  private final int user_id;
  private final String first_name;
  private final String last_name;
  private final String dob;
  private final String email;
  private final String phone_number;
  private final String address;
  private final int provider_id;

  public Patient(int user_id, String first_name, String last_name, String dob,
                String email, String phone_number, String address, int provider_id ) {
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = dob;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.provider_id = provider_id;
  }

  public int getUserID() {
    return this.user_id;
  }

  public String getFirstName() {
    return this.first_name;
  }

  public String getLastName() {
    return this.last_name;
  }

  public String getDOB() {
    return this.dob;
  }

  public String getEmail() {
    return this.email;
  }

  public String getPhoneNumber() {
    return this.phone_number;
  }

  public String getAddress() {
    return this.address;
  }

  public int getProviderID() {
    return this.provider_id;
  }
}
