package com.example.tendo.model.Diagnosis;

import com.example.tendo.model.Diagnosis.Diagnosis;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // Rest Endpoints
@RequestMapping(path = "api/v1/diagnosis")
@CrossOrigin("*")
public class DiagnosisController {

  private final DiagnosisService diagnosisService;

  @Autowired
  public DiagnosisController(DiagnosisService diagnosisService) {
    this.diagnosisService = diagnosisService;
  }

  @GetMapping //Get Mapping
  public List<Diagnosis> getDiagnosis() {
    return diagnosisService.getDiagnosises();
  }

  @PostMapping
  public void createDiagnosis(@RequestBody Diagnosis diagnosis) {
    diagnosisService.addDiagnosis(diagnosis);
  }

  @DeleteMapping(path = "{diagnosisId}")
  public void deleteDiagnosis(@PathVariable("diagnosisId") Long diagnosisId) {
    diagnosisService.deleteDiagnosis(diagnosisId);
  }
}
