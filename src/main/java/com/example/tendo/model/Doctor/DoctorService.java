package com.example.tendo.model.Doctor;

import com.example.tendo.model.Doctor.Doctor;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

  private final DoctorRepository doctorRepository;

  @Autowired
  public DoctorService(DoctorRepository doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  public List<Doctor> getDoctors() {
    return doctorRepository.findAll();
  }

  public void addDoctor(Doctor doctor) {
    doctorRepository.save(doctor);
  }

  public void addRating(String doctorId, String rating) {
    Optional<Doctor> doctor = doctorRepository.findDoctorById(doctorId);

    if (doctor.isPresent()) {
      Doctor modifiedDoctor = doctor.get();
      modifiedDoctor.addRating(Integer.parseInt(rating));
      doctorRepository.save(modifiedDoctor);
    }
  }

  public void deleteDoctor(Long doctorId) {
    boolean exists = doctorRepository.existsById(doctorId);
    if (!exists) {
      throw new IllegalStateException(
        "Doctor with ID: " + doctorId + " does not exist"
      );
    }
    doctorRepository.deleteById(doctorId);
  }
}
