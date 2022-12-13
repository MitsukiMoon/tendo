package com.example.tendo;

import static com.example.tendo.model.common.Common.*;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Appointment.AppointmentRepository;
import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Bundle.BundleRepository;
import com.example.tendo.model.Diagnosis.Diagnosis;
import com.example.tendo.model.Diagnosis.DiagnosisRepository;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Doctor.DoctorRepository;
import com.example.tendo.model.Patient.Patient;
import com.example.tendo.model.Patient.PatientRepository;
import com.example.tendo.model.Resource;
import com.example.tendo.model.common.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PatientApplication {

  public static void main(String[] args) throws IOException {
    SpringApplication.run(PatientApplication.class, args);
  }

  @Bean
  CommandLineRunner commandLineRunner(
    AppointmentRepository appointmentRepository,
    DoctorRepository doctorRepository,
    PatientRepository patientRepository,
    DiagnosisRepository diagnosisRepository,
    BundleRepository bundleRepository
  ) {
    return args -> {
      File rawData = new File(
        "src/main/resources/static/patient-feedback-raw-data.json"
      );

      ObjectMapper objectMapper = new ObjectMapper();

      SimpleDateFormat utcFormat = new SimpleDateFormat(
        "yyyy-MM-dd'T'HH:mm:ss'Z'"
      );

      JsonNode jsonNode = objectMapper.readTree(rawData);

      // Process Bundle

      String bundleId = jsonNode.get(ID).asText();
      String bundleTimestamp = jsonNode.get(TIMESTAMP).asText();
      Date bundleDate = utcFormat.parse(bundleTimestamp);
      Bundle bundle = new Bundle(bundleId, bundleDate);
      bundleRepository.saveAll(List.of(bundle));

      // Process Entry
      JsonNode entries = jsonNode.get(ENTRY);
      HashMap<String, Resource> entryHashMap = new HashMap<>();
      entryHashMap.put(bundleId, bundle);

      for (final JsonNode objNode : entries) {
        JsonNode resource = objNode.get(RESOURCE);

        String resourceTypeString = resource.get(RESOURCE_TYPE).asText();
        ResourceType resourceType = ResourceType.valueOf(
          resourceTypeString.toUpperCase()
        );

        switch (resourceType) {
          case PATIENT:
            patientLoader(patientRepository, resource, entryHashMap, bundle);
            break;
          case DIAGNOSIS:
            diagnosisLoader(
              diagnosisRepository,
              resource,
              entryHashMap,
              bundle
            );
            break;
          case DOCTOR:
            doctorLoader(doctorRepository, resource, entryHashMap, bundle);
            break;
          case APPOINTMENT:
            appointmentLoader(
              appointmentRepository,
              resource,
              entryHashMap,
              bundle
            );
            break;
          default:
            break;
        }
      }
    };
  }

  private static void diagnosisLoader(
    DiagnosisRepository diagnosisRepository,
    JsonNode resource,
    HashMap<String, Resource> entries,
    Bundle bundle
  ) {
    String id = resource.get(ID).asText();
    String lastUpdated = resource.get(META).get(LAST_UPDATED).asText();

    SimpleDateFormat utcFormat = new SimpleDateFormat(
      "yyyy-MM-dd'T'HH:mm:ss'Z'"
    );

    Date lastUpdatedDate = null;

    try {
      lastUpdatedDate = utcFormat.parse(lastUpdated);
    } catch (Exception e) {
      System.out.println("Failure to parse birthday date for patient");
    }

    Metadata metadata = new Metadata(lastUpdatedDate);

    String statusString = resource.get(STATUS).asText();
    Status status = Status.valueOf(statusString.toUpperCase());

    JsonNode codingNode = resource.get(CODE).get(CODING).get(0);

    String system = codingNode.get(SYSTEM).asText();
    String code = codingNode.get(CODE).asText();
    String name = codingNode.get(NAME).asText();

    Coding coding = new Coding(system, code, name);

    String appointmentReference = resource
      .get(APPOINTMENT)
      .get(REFERENCE)
      .asText();
    String appointmentId = appointmentReference.substring(
      appointmentReference.indexOf('/') + 1
    );

    Appointment appointment = (Appointment) entries.get(appointmentId);

    Diagnosis diagnosis = new Diagnosis(
      id,
      metadata,
      coding,
      status,
      appointment,
      bundle
    );

    diagnosisRepository.saveAll(List.of(diagnosis));
    entries.put(id, diagnosis);
  }

  private static void appointmentLoader(
    AppointmentRepository appointmentRepository,
    JsonNode resource,
    HashMap<String, Resource> entries,
    Bundle bundle
  ) {
    SimpleDateFormat utcFormat = new SimpleDateFormat(
      "yyyy-MM-dd'T'HH:mm:ss'Z'"
    );

    String id = resource.get(ID).asText();
    String statusString = resource.get(STATUS).asText();
    Status status = Status.valueOf(statusString.toUpperCase());
    String type = resource.get(TYPE).get(0).get(TEXT).asText();
    String subject = resource.get(SUBJECT).get(REFERENCE).asText();
    String subjectId = subject.substring(subject.indexOf('/') + 1);
    String actor = resource.get(ACTOR).get(REFERENCE).asText();
    String actorId = actor.substring(actor.indexOf('/') + 1);

    Patient patient = (Patient) entries.get(subjectId);
    Doctor doctor = (Doctor) entries.get(actorId);

    String startPeriod = resource.get(PERIOD).get(START).asText();
    String endPeriod = resource.get(PERIOD).get(END).asText();

    Date startDate = null;
    Date endDate = null;

    try {
      startDate = utcFormat.parse(startPeriod);
      endDate = utcFormat.parse(endPeriod);
    } catch (Exception e) {
      System.out.println("Failure to parse birthday date for patient");
    }

    Period period = new Period(startDate, endDate);

    Appointment appointment = new Appointment(
      id,
      status,
      type,
      patient,
      doctor,
      period,
      null,
      bundle
    );

    appointmentRepository.saveAll(List.of(appointment));
    entries.put(id, appointment);
  }

  private static void doctorLoader(
    DoctorRepository doctorRepository,
    JsonNode resource,
    HashMap<String, Resource> entries,
    Bundle bundle
  ) {
    String id = resource.get(ID).asText();
    JsonNode nameNode = resource.get(NAME).get(0);
    String givenName = nameNode.get(GIVEN).get(0).asText();
    String familyName = nameNode.get(FAMILY).asText();

    Name name = new Name(familyName, givenName);

    Doctor doctor = new Doctor(id, name, bundle);
    entries.put(id, doctor);
    doctorRepository.saveAll(List.of(doctor));
  }

  private static void patientLoader(
    PatientRepository patientRepository,
    JsonNode resource,
    HashMap<String, Resource> entries,
    Bundle bundle
  ) {
    Patient patient = new Patient();

    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    String id = resource.get(ID).asText();
    boolean active = resource.get(ACTIVE).asBoolean();

    JsonNode nameNode = resource.get(NAME).get(0);
    String givenName = nameNode.get(GIVEN).get(0).asText();
    String familyName = nameNode.get(FAMILY).asText();

    Name name = new Name(familyName, givenName);

    JsonNode contactNode = resource.get(CONTACT);

    for (final JsonNode contact : contactNode) {
      String system = contact.get(SYSTEM).asText();
      String value = contact.get(VALUE).asText();
      String use = contact.get(USE).asText();

      patient.addContact(new Contact(system, value, use));
    }

    String gender = resource.get(GENDER).asText();
    String birthdate = resource.get(BIRTHDATE).asText();
    Date birthdateDate = null;
    try {
      birthdateDate = dateFormat.parse(birthdate);
    } catch (Exception e) {
      System.out.println("Failure to parse birthday date for patient");
    }

    JsonNode addressNode = resource.get(ADDRESS);

    for (final JsonNode address : addressNode) {
      String use = address.get(USE).asText();
      String line = address.get(LINE).get(0).asText();

      patient.addAddress(new Address(use, line));
    }

    patient.setId(id);
    patient.setActive(active);
    patient.setName(name);
    patient.setGender(gender);
    patient.setBirthdate(birthdateDate);
    patient.setBundle(bundle);
    patientRepository.saveAll(List.of(patient));
    entries.put(id, patient);
  }
}
