package com.example.tendo.model.Bundle;

import com.example.tendo.model.Resource;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // Rest Endpoints
@RequestMapping(path = "api/v1/bundle")
@CrossOrigin("*")
public class BundleController {

  private final BundleService bundleService;

  @Autowired
  public BundleController(BundleService bundleService) {
    this.bundleService = bundleService;
  }

  @GetMapping //Get Mapping
  public List<Bundle> getBundles() {
    return bundleService.getBundles();
  }

  @PostMapping
  public void createBundle(@RequestBody Bundle bundle) {
    bundleService.addBundle(bundle);
  }

  @DeleteMapping(path = "{bundleId}")
  public void deleteBundle(@PathVariable("bundleId") Long bundleId) {
    bundleService.deleteBundle(bundleId);
  }

  @GetMapping(path = "{bundleId}/resources")
  public Set<Resource> getResources(@PathVariable("bundleId") String bundleId) {
    return bundleService.getResources(bundleId);
  }
}
