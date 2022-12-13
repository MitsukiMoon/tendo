package com.example.tendo.model.Patient;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
  @Query(
    "SELECT p FROM  Patient p  WHERE p.name.familyName = ?1 AND p.name.givenName = ?2"
  )
  Optional<Patient> findPatientByName(String familyName, String givenName);

  @Query("SELECT p FROM  Patient p  WHERE p.id = ?1")
  Optional<Patient> findPatientById(String id);
}
