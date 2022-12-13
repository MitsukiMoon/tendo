package com.example.tendo.model.Patient;

import com.example.tendo.model.Appointment.Appointment;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

  private final PatientRepository patientRepository;

  @Autowired
  public PatientService(PatientRepository patientRepository) {
    this.patientRepository = patientRepository;
  }

  public List<Patient> getPatients() {
    return patientRepository.findAll();
  }

  public void addPatient(Patient patient) {
    patientRepository.save(patient);
  }

  public Patient getPatientById(String id) {
    Optional<Patient> patientByName = patientRepository.findPatientById(id);

    if (patientByName.isPresent()) {
      return patientByName.get();
    }

    throw new IllegalStateException("Patient with" + id + "does not exist.");
  }

  public Appointment getAppointment(String patientId, String appointmentId) {
    Optional<Patient> patientByName = patientRepository.findPatientById(
      patientId
    );

    if (patientByName.isPresent()) {
      Set<Appointment> appointmentSet = patientByName.get().getAppointments();
      for (Appointment appointment : appointmentSet) {
        if (appointment.getId().equals(appointmentId)) {
          return appointment;
        }
      }
    }

    throw new IllegalStateException(
      "Patient with" + patientId + "does not exist."
    );
  }

  public Patient getPatientByName(String givenName, String familyName) {
    Optional<Patient> patientByName = patientRepository.findPatientByName(
      familyName,
      givenName
    );

    if (patientByName.isPresent()) {
      return patientByName.get();
    }

    throw new IllegalStateException(
      "Patient with" + givenName + " " + familyName + "does not exist."
    );
  }

  public void deletePatient(Long patientId) {
    boolean exists = patientRepository.existsById(patientId);
    if (!exists) {
      throw new IllegalStateException(
        "Patient with ID: " + patientId + " does not exist"
      );
    }
    patientRepository.deleteById(patientId);
  }
}
