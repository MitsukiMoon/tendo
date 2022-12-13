package com.example.tendo.model.Appointment;

import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Diagnosis.Diagnosis;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Patient.Patient;
import com.example.tendo.model.Resource;
import com.example.tendo.model.common.Common.ResourceType;
import com.example.tendo.model.common.Common.Status;
import com.example.tendo.model.common.Period;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "appointment")
public class Appointment extends Resource implements Serializable {

  @Enumerated(EnumType.ORDINAL)
  private Status status;

  private String type;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "patient_Id")
  @JsonIgnore
  private Patient patient;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "doctor_Id")
  @JsonIgnore
  private Doctor doctor;

  @Embedded
  private Period period;

  private String diagnosisExplanation;

  private String patientFeeling;

  @OneToMany(
    fetch = FetchType.LAZY,
    mappedBy = "appointment",
    cascade = { CascadeType.ALL }
  )
  private Set<Diagnosis> diagnoses;

  public Appointment() {
    super();
  }

  public Appointment(String id, Bundle bundle) {
    super(id, ResourceType.APPOINTMENT, bundle);
  }

  public Appointment(String id, Doctor doctor, Patient patient, Bundle bundle) {
    super(id, ResourceType.APPOINTMENT, bundle);
    this.doctor = doctor;
    this.patient = patient;
  }

  public Appointment(
    String id,
    Status status,
    String type,
    Patient patient,
    Doctor doctor,
    Period period,
    Set<Diagnosis> diagnoses,
    Bundle bundle
  ) {
    super(id, ResourceType.APPOINTMENT, bundle);
    this.status = status;
    this.type = type;
    this.patient = patient;
    this.doctor = doctor;
    this.period = period;
    this.diagnoses = diagnoses;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Set<Diagnosis> getDiagnoses() {
    return diagnoses;
  }

  public void addDiagnosis(Diagnosis diagnosis) {
    if (diagnoses == null) {
      this.diagnoses = new HashSet<>();
    }

    diagnoses.add(diagnosis);
  }

  public void setDiagnoses(Set<Diagnosis> diagnoses) {
    this.diagnoses = diagnoses;
  }

  public String getDiagnosisExplanation() {
    return diagnosisExplanation;
  }

  public void setDiagnosisExplanation(String diagnosisExplanation) {
    this.diagnosisExplanation = diagnosisExplanation;
  }

  public String getPatientFeeling() {
    return patientFeeling;
  }

  public void setPatientFeeling(String patientFeeling) {
    this.patientFeeling = patientFeeling;
  }

  public Patient getPatient() {
    return patient;
  }

  public void setPatient(Patient patient) {
    this.patient = patient;
  }

  public Doctor getDoctor() {
    return doctor;
  }

  public void setDoctor(Doctor doctor) {
    this.doctor = doctor;
  }

  public Period getPeriod() {
    return period;
  }

  public void setPeriod(Period period) {
    this.period = period;
  }
}
