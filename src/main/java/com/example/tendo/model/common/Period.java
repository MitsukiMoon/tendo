package com.example.tendo.model.common;

import java.util.Date;
import javax.persistence.Embeddable;

@Embeddable
public class Period {

  private Date start;
  private Date end;

  public Period(Date start, Date end) {
    this.start = start;
    this.end = end;
  }

  public Period() {}

  public Date getStart() {
    return start;
  }

  public void setStart(Date start) {
    this.start = start;
  }

  public Date getEnd() {
    return end;
  }

  public void setEnd(Date end) {
    this.end = end;
  }
}
