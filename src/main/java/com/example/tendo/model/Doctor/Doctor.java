package com.example.tendo.model.Doctor;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Resource;
import com.example.tendo.model.common.Common.ResourceType;
import com.example.tendo.model.common.Name;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor extends Resource implements Serializable {

  @Embedded
  private Name name;

  private int totalRating;

  private int numberOfRatings;

  @OneToMany(
    fetch = FetchType.LAZY,
    mappedBy = "doctor",
    cascade = { CascadeType.ALL }
  )
  private Set<Appointment> appointments;

  public Doctor() {
    super();
    this.setResourceType(ResourceType.DOCTOR);
  }

  public Doctor(String id, Name name, Bundle bundle) {
    super(id, ResourceType.DOCTOR, bundle);
    this.name = name;
    this.totalRating = 0;
    this.numberOfRatings = 0;
  }

  public Name getName() {
    return name;
  }

  public int getTotalRating() {
    return totalRating;
  }

  public void setName(Name name) {
    this.name = name;
  }

  public void setAverageRating(int rating) {
    this.totalRating = rating;
  }

  public int getNumberOfRatings() {
    return numberOfRatings;
  }

  public void setNumberOfRatings(int numberOfRatings) {
    this.numberOfRatings = numberOfRatings;
  }

  public Set<Appointment> getAppointments() {
    return appointments;
  }

  public void addAppointment(Appointment appointment) {
    appointment.setDoctor(this);
    if (appointments == null) {
      this.appointments = new HashSet<>();
    }
    appointments.add(appointment);
  }

  public void addRating(int value) {
    this.numberOfRatings++;
    this.totalRating = (this.totalRating + value);
  }

  public String toString() {
    return this.name.toString();
  }
}
