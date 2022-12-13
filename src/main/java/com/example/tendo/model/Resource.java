package com.example.tendo.model;

import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.common.Common.ResourceType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Resource {

  @Id
  private String id;

  @Enumerated(EnumType.ORDINAL)
  private ResourceType resourceType;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "bundle_Id")
  @JsonIgnore
  private Bundle bundle;

  public Resource() {}

  public Resource(String id, ResourceType resourceType, Bundle bundle) {
    this.id = id;
    this.resourceType = resourceType;
    this.bundle = bundle;
  }

  public String getId() {
    return id;
  }

  public Bundle getBundle() {
    return bundle;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setBundle(Bundle bundle) {
    this.bundle = bundle;
  }

  public ResourceType getResourceType() {
    return resourceType;
  }

  public void setResourceType(ResourceType resourceType) {
    this.resourceType = resourceType;
  }
}
