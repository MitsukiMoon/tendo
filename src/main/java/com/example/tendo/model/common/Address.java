package com.example.tendo.model.common;

import javax.persistence.*;

@Entity
public class Address {
  @Id
  @SequenceGenerator(
    name = "address_sequence",
    sequenceName = "address_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "address_sequence"
  )
  private long id;

  private String line;
  private String use;

  public Address(String line, String use) {
    this.line = line;
    this.use = use;
  }

  public Address() {}

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getLine() {
    return line;
  }

  public void setLine(String line) {
    this.line = line;
  }

  public String getUse() {
    return use;
  }

  public void setUse(String use) {
    this.use = use;
  }
}
