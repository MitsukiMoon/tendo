package com.example.tendo.model.Appointment;

import com.example.tendo.model.Diagnosis.Diagnosis;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Patient.Patient;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // Rest Endpoints
@RequestMapping(path = "api/v1/appointment")
@CrossOrigin("*")
public class AppointmentController {

  private final AppointmentService appointmentService;

  @Autowired
  public AppointmentController(AppointmentService appointmentService) {
    this.appointmentService = appointmentService;
  }

  @GetMapping //Get Mapping
  public List<Appointment> getAppointments() {
    return appointmentService.getAppointments();
  }

  @GetMapping(path = "{appointmentId}")
  public Appointment getAppointment(
    @PathVariable("appointmentId") String appointmentId
  ) {
    return appointmentService.getAppointment(appointmentId);
  }

  @GetMapping(path = "{appointmentId}/doctor")
  public Doctor getDoctor(@PathVariable("appointmentId") String appointmentId) {
    return appointmentService.getDoctor(appointmentId);
  }

  @GetMapping(path = "{appointmentId}/patient")
  public Patient getPatient(
    @PathVariable("appointmentId") String appointmentId
  ) {
    return appointmentService.getPatient(appointmentId);
  }

  @GetMapping(path = "{appointmentId}/diagnoses")
  public Set<Diagnosis> getDiagnoses(
    @PathVariable("appointmentId") String appointmentId
  ) {
    return appointmentService.getDiagnoses(appointmentId);
  }

  @PostMapping(
    path = "{appointmentId}/diagnosisExplanation/{diagnosisExplanation}"
  )
  public void addDiagnosisExplanation(
    @PathVariable("appointmentId") String appointmentId,
    @PathVariable("diagnosisExplanation") String diagnosisExplanation
  ) {
    appointmentService.addDiagnosisExplanation(
      appointmentId,
      diagnosisExplanation
    );
  }

  @PostMapping(path = "{appointmentId}/patientFeeling/{patientFeeling}")
  public void addPatientFeeling(
    @PathVariable("appointmentId") String appointmentId,
    @PathVariable("patientFeeling") String patientFeeling
  ) {
    appointmentService.addPatientFeeling(appointmentId, patientFeeling);
  }

  @PostMapping
  public void createAppointment(@RequestBody Appointment appointment) {
    appointmentService.addAppointment(appointment);
  }

  @DeleteMapping(path = "{appointmentId}")
  public void deleteAppointment(
    @PathVariable("appointmentId") Long appointmentId
  ) {
    appointmentService.deleteAppointment(appointmentId);
  }
}
