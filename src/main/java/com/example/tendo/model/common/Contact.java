package com.example.tendo.model.common;

import javax.persistence.*;

@Entity
public class Contact {

  @Id
  @SequenceGenerator(
    name = "contact_sequence",
    sequenceName = "contact_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "contact_sequence"
  )
  private long id;

  private String system;
  private String value;
  private String use;

  public Contact(String system, String value, String use) {
    this.system = system;
    this.value = value;
    this.use = use;
  }

  public Contact() {}

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getSystem() {
    return system;
  }

  public void setSystem(String system) {
    this.system = system;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public String getUse() {
    return use;
  }

  public void setUse(String use) {
    this.use = use;
  }
}
