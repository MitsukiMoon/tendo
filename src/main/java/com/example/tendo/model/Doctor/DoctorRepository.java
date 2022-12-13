package com.example.tendo.model.Doctor;

import com.example.tendo.model.Doctor.Doctor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
  @Query("SELECT d FROM  Doctor d  WHERE d.id = ?1")
  Optional<Doctor> findDoctorById(String id);
}
