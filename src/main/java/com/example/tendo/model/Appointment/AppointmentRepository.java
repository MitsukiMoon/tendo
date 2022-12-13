package com.example.tendo.model.Appointment;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository
  extends JpaRepository<Appointment, Long> {
  @Query("SELECT c FROM  Appointment c  WHERE c.id = ?1")
  Optional<Appointment> findAppointmentById(String id);
}
