package com.example.tendo.model.Patient;

import com.example.tendo.model.Appointment.Appointment;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // Rest Endpoints
@RequestMapping(path = "api/v1/patient")
@CrossOrigin("*")
public class PatientController {

  private final PatientService patientService;

  @Autowired
  public PatientController(PatientService patientService) {
    this.patientService = patientService;
  }

  @GetMapping //Get Mapping
  public List<Patient> getPatients() {
    return patientService.getPatients();
  }

  @GetMapping(path = "givenName/{givenName}/familyName/{familyName}")
  public Patient getPatient(
    @PathVariable("givenName") String givenName,
    @PathVariable("familyName") String familyName
  ) {
    return patientService.getPatientByName(givenName, familyName);
  }

  @GetMapping(path = "{patientId}/appointment/{appointmentId}")
  public Appointment getAppointment(
    @PathVariable("patientId") String patientId,
    @PathVariable("appointmentId") String appointmentId
  ) {
    return patientService.getAppointment(patientId, appointmentId);
  }

  @GetMapping(path = "{patientId}")
  public Patient getPatient(@PathVariable("patientId") String patientId) {
    return patientService.getPatientById(patientId);
  }

  @PostMapping
  public void createPatient(@RequestBody Patient patient) {
    patientService.addPatient(patient);
  }

  @DeleteMapping(path = "{patientId}")
  public void deletePatient(@PathVariable("patientId") Long patientId) {
    patientService.deletePatient(patientId);
  }
}
