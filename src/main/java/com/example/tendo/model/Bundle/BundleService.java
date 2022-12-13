package com.example.tendo.model.Bundle;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Diagnosis.Diagnosis;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Resource;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BundleService {

  private final BundleRepository bundleRepository;

  @Autowired
  public BundleService(BundleRepository bundleRepository) {
    this.bundleRepository = bundleRepository;
  }

  public List<Bundle> getBundles() {
    return bundleRepository.findAll();
  }

  public void addBundle(Bundle doctor) {
    bundleRepository.save(doctor);
  }

  public Set<Resource> getResources(String bundleId) {
    Optional<Bundle> bundleById = bundleRepository.findBundleById(bundleId);

    if (bundleById.isPresent()) {
      return bundleById.get().getResources();
    }
    throw new IllegalStateException("Bundle does not exist");
  }

  public void deleteBundle(Long doctorId) {
    boolean exists = bundleRepository.existsById(doctorId);
    if (!exists) {
      throw new IllegalStateException(
        "Bundle with ID: " + doctorId + " does not exist"
      );
    }
    bundleRepository.deleteById(doctorId);
  }
}
