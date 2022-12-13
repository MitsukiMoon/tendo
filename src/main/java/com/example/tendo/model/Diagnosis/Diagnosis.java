package com.example.tendo.model.Diagnosis;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Resource;
import com.example.tendo.model.common.Coding;
import com.example.tendo.model.common.Common.ResourceType;
import com.example.tendo.model.common.Common.Status;
import com.example.tendo.model.common.Metadata;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "diagnosis")
public class Diagnosis extends Resource implements Serializable {

  @Embedded
  private Metadata metadata;

  @Embedded
  private Coding code;

  @Enumerated(EnumType.ORDINAL)
  private Status status;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "appointment_Id")
  @JsonIgnore
  private Appointment appointment;

  public Diagnosis() {}

  public Diagnosis(String id, Metadata metadata, Bundle bundle) {
    super(id, ResourceType.DIAGNOSIS, bundle);
    this.metadata = metadata;
  }

  public Diagnosis(
    String id,
    Metadata metadata,
    Coding code,
    Status status,
    Appointment appointment,
    Bundle bundle
  ) {
    super(id, ResourceType.DIAGNOSIS, bundle);
    this.metadata = metadata;
    this.code = code;
    this.status = status;
    this.appointment = appointment;
  }

  public Metadata getMetadata() {
    return metadata;
  }

  public void setMetadata(Metadata metadata) {
    this.metadata = metadata;
  }

  public Coding getCode() {
    return code;
  }

  public void setCode(Coding code) {
    this.code = code;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public Appointment getAppointment() {
    return appointment;
  }

  public void setAppointment(Appointment appointment) {
    this.appointment = appointment;
  }
}
