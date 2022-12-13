package com.example.tendo.model.Doctor;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // Rest Endpoints
@RequestMapping(path = "api/v1/doctor")
@CrossOrigin("*")
public class DoctorController {

  private final DoctorService doctorService;

  @Autowired
  public DoctorController(DoctorService doctorService) {
    this.doctorService = doctorService;
  }

  @GetMapping //Get Mapping
  public List<Doctor> getDoctors() {
    return doctorService.getDoctors();
  }

  @PostMapping
  public void createDoctor(@RequestBody Doctor doctor) {
    doctorService.addDoctor(doctor);
  }

  @PostMapping(path = "{doctorId}/rating/{rating}")
  public void addRating(
    @PathVariable("doctorId") String doctorId,
    @PathVariable("rating") String rating
  ) {
    doctorService.addRating(doctorId, rating);
  }

  @DeleteMapping(path = "{doctorId}")
  public void deleteDoctor(@PathVariable("doctorId") Long doctorId) {
    doctorService.deleteDoctor(doctorId);
  }
}
