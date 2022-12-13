package com.example.tendo.model.Bundle;

import com.example.tendo.model.Resource;
import com.example.tendo.model.common.Common.ResourceType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "bundle")
public class Bundle extends Resource implements Serializable {

  private Date date;

  @OneToMany(
    fetch = FetchType.LAZY,
    mappedBy = "bundle",
    cascade = { CascadeType.ALL }
  )
  @JsonIgnore
  private Set<Resource> resources; // Set of Resources over Patient, Doctor, Appointment and Diagnosis instance variables

  public Bundle() {}

  public Bundle(String id, Date date) {
    super(id, ResourceType.BUNDLE, null);
    this.date = date;
  }

  public Date getDate() {
    return date;
  }

  public void addResource(Resource resource) {
    if (resources == null) {
      this.resources = new HashSet<>();
    }
    resources.add(resource);
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public Set<Resource> getResources() {
    return resources;
  }

  public void setResources(Set<Resource> resources) {
    this.resources = resources;
  }
}
