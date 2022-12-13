package com.example.tendo.model.common;

import javax.persistence.Embeddable;

@Embeddable
public class Name {

  String familyName;

  String givenName;

  public Name() {}

  public Name(String familyName, String givenName) {
    this.familyName = familyName;
    this.givenName = givenName;
  }

  public String getFamilyName() {
    return familyName;
  }

  public void setFamilyName(String familyName) {
    this.familyName = familyName;
  }

  public String getGivenName() {
    return givenName;
  }

  public void setGivenName(String givenName) {
    this.givenName = givenName;
  }

  public String toString() {
    return familyName + " " + givenName;
  }
}
