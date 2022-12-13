package com.example.tendo.model.common;

public class Common {

  public enum ResourceType {
    BUNDLE,
    PATIENT,
    APPOINTMENT,
    DOCTOR,
    DIAGNOSIS,
  }

  public enum Status {
    PENDING,
    IN_PROGRESS,
    FINISHED,
    FINAL,
  }

  public static final String RESOURCE_TYPE = "resourceType";
  public static final String ID = "id";
  public static final String TIMESTAMP = "timestamp";
  public static final String ACTIVE = "active";
  public static final String FAMILY = "family";
  public static final String GIVEN = "given";
  public static final String CONTACT = "contact";
  public static final String SYSTEM = "system";
  public static final String VALUE = "value";
  public static final String USE = "use";
  public static final String GENDER = "gender";
  public static final String BIRTHDATE = "birthDate";
  public static final String ADDRESS = "address";
  public static final String LINE = "line";
  public static final String STATUS = "status";
  public static final String TYPE = "type";
  public static final String SUBJECT = "subject";
  public static final String REFERENCE = "reference";
  public static final String ACTOR = "actor";
  public static final String PERIOD = "period";
  public static final String START = "start";
  public static final String END = "end";
  public static final String META = "meta";
  public static final String CODE = "code";
  public static final String CODING = "coding";
  public static final String NAME = "name";
  public static final String APPOINTMENT = "appointment";
  public static final String ENTRY = "entry";
  public static final String RESOURCE = "resource";
  public static final String TEXT = "text";
  public static final String LAST_UPDATED = "lastUpdated";
}
