package com.example.tendo.model.Appointment;

import com.example.tendo.model.Diagnosis.Diagnosis;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Patient.Patient;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

  private final AppointmentRepository appointmentRepository;

  @Autowired
  public AppointmentService(AppointmentRepository appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public List<Appointment> getAppointments() {
    return appointmentRepository.findAll();
  }

  public void addAppointment(Appointment appointment) {
    appointmentRepository.save(appointment);
  }

  public Appointment getAppointment(String appointmentId) {
    Optional<Appointment> appointmentById = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointmentById.isPresent()) {
      return appointmentById.get();
    }
    throw new IllegalStateException("Appointment does not exist");
  }

  public Doctor getDoctor(String appointmentId) {
    Optional<Appointment> appointmentById = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointmentById.isPresent()) {
      return appointmentById.get().getDoctor();
    }
    throw new IllegalStateException("Appointment does not exist");
  }

  public void addPatientFeeling(String appointmentId, String patientFeeling) {
    Optional<Appointment> appointment = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointment.isPresent()) {
      Appointment modifiedAppointment = appointment.get();
      modifiedAppointment.setPatientFeeling(patientFeeling);
      appointmentRepository.save(modifiedAppointment);
    }
  }

  public void addDiagnosisExplanation(
    String appointmentId,
    String diagnosisExplanation
  ) {
    Optional<Appointment> appointment = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointment.isPresent()) {
      Appointment modifiedAppointment = appointment.get();
      modifiedAppointment.setDiagnosisExplanation(diagnosisExplanation);
      appointmentRepository.save(modifiedAppointment);
    }
  }

  public Patient getPatient(String appointmentId) {
    Optional<Appointment> appointmentById = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointmentById.isPresent()) {
      return appointmentById.get().getPatient();
    }

    throw new IllegalStateException("Appointment does not exist");
  }

  public Set<Diagnosis> getDiagnoses(String appointmentId) {
    Optional<Appointment> appointmentById = appointmentRepository.findAppointmentById(
      appointmentId
    );

    if (appointmentById.isPresent()) {
      return appointmentById.get().getDiagnoses();
    }
    throw new IllegalStateException("Appointment does not exist");
  }

  public void deleteAppointment(Long appointmentId) {
    boolean exists = appointmentRepository.existsById(appointmentId);
    if (!exists) {
      throw new IllegalStateException(
        "Appointment with ID: " + appointmentId + " does not exist"
      );
    }
    appointmentRepository.deleteById(appointmentId);
  }
}
