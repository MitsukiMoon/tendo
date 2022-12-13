package com.example.tendo.model.Patient;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Resource;
import com.example.tendo.model.common.Address;
import com.example.tendo.model.common.Common.ResourceType;
import com.example.tendo.model.common.Contact;
import com.example.tendo.model.common.Name;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "patient")
public class Patient extends Resource {
  private boolean active;
  @Embedded
  private Name name;
  @OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
  @JoinColumn(name = "patient_id")
  private Set<Contact> contacts;
  private String gender;
  private Date birthdate;
  @OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
  @JoinColumn(name = "patient_id")
  private Set<Address> addresses;
  @OneToMany(
    fetch = FetchType.LAZY,
    mappedBy = "patient",
    cascade = { CascadeType.ALL }
  )
  private Set<Appointment> appointments;
  public Patient() {
    super();
    this.setResourceType(ResourceType.PATIENT);
  }
  public Patient(
    String id,
    Name name,
    boolean active,
    Set<Contact> contacts,
    String gender,
    Date birthdate,
    Set<Address> addresses,
    Set<Appointment> appointments,
    Bundle bundle
  ) {
    super(id, ResourceType.PATIENT, bundle);
    this.name = name;
    this.active = active;
    this.contacts = contacts;
    this.gender = gender;
    this.birthdate = birthdate;
    this.addresses = addresses;
    this.appointments = appointments;
  }
  public void addContact(Contact contact) {
    if (contacts == null) {
      this.contacts = new HashSet<>();
    }
    contacts.add(contact);
  }

  public void addAddress(Address address) {
    if (addresses == null) {
      this.addresses = new HashSet<>();
    }
    addresses.add(address);
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public Name getName() {
    return name;
  }

  public void setName(Name name) {
    this.name = name;
  }

  public Set<Contact> getContacts() {
    return contacts;
  }

  public void setContacts(Set<Contact> contacts) {
    this.contacts = contacts;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public Date getBirthdate() {
    return birthdate;
  }

  public void setBirthdate(Date birthdate) {
    this.birthdate = birthdate;
  }

  public Set<Address> getAddresses() {
    return addresses;
  }

  public void setAddresses(Set<Address> addresses) {
    this.addresses = addresses;
  }

  public Set<Appointment> getAppointments() {
    return appointments;
  }

  public void setAppointments(Set<Appointment> appointments) {
    this.appointments = appointments;
  }
}
