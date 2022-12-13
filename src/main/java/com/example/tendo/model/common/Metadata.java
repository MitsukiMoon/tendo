package com.example.tendo.model.common;

import java.util.Date;
import javax.persistence.Embeddable;

@Embeddable
public class Metadata {

  private Date lastUpdated;

  public Metadata(Date lastUpdated) {
    this.lastUpdated = lastUpdated;
  }

  public Metadata() {}

  public Date getLastUpdated() {
    return lastUpdated;
  }

  public void setLastUpdated(Date lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}
