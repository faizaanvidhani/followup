package edu.brown.cs.student.clinic;

public class Clinic {

  private final int clinic_id;
  private final String clinic_name;
  private final String address;
  private final String city;
  private final String state;
  private final int zip_code;
  private final String phone_number;

  public Clinic(int clinic_id, String clinic_name, String address, String city,
                String state, int zip_code, String phone_number ) {
    this.clinic_id = clinic_id;
    this.clinic_name = clinic_name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip_code = zip_code;
    this.phone_number = phone_number;
  }

  public int getClinicID() {
    return this.clinic_id;
  }

  public String getClinicName() {
    return this.clinic_name;
  }

  public String getAddress() {
    return this.address;
  }

  public String getCity() {
    return this.city;
  }

  public String getState() {
    return this.state;
  }

  public int getZipCode() {
    return this.zip_code;
  }

  public String getPhoneNumber() {
    return this.phone_number;
  }
}
