package com.example.tendo.model.Diagnosis;

import com.example.tendo.model.Doctor.Doctor;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiagnosisService {

  private final DiagnosisRepository diagnosisRepository;

  @Autowired
  public DiagnosisService(DiagnosisRepository diagnosisRepository) {
    this.diagnosisRepository = diagnosisRepository;
  }

  public List<Diagnosis> getDiagnosises() {
    return diagnosisRepository.findAll();
  }

  public void addDiagnosis(Diagnosis diagnosis) {
    diagnosisRepository.save(diagnosis);
  }

  public void deleteDiagnosis(Long diagnosisId) {
    boolean exists = diagnosisRepository.existsById(diagnosisId);
    if (!exists) {
      throw new IllegalStateException(
        "Diagnosis with ID: " + diagnosisId + " does not exist"
      );
    }
    diagnosisRepository.deleteById(diagnosisId);
  }
}
