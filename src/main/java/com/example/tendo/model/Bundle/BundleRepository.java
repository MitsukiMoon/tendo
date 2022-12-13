package com.example.tendo.model.Bundle;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Doctor.Doctor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BundleRepository extends JpaRepository<Bundle, Long> {
  @Query("SELECT c FROM  Bundle c  WHERE c.id = ?1")
  Optional<Bundle> findBundleById(String id);
}
