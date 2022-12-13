package com.example.tendo.model.common;

import javax.persistence.Embeddable;

@Embeddable
public class Coding {

  private String system;
  private String code;
  private String name;

  public Coding(String system, String code, String name) {
    this.system = system;
    this.code = code;
    this.name = name;
  }

  public Coding() {}

  public String getSystem() {
    return system;
  }

  public void setSystem(String system) {
    this.system = system;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
