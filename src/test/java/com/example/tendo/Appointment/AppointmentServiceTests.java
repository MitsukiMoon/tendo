package com.example.tendo.Appointment;

import com.example.tendo.model.Appointment.Appointment;
import com.example.tendo.model.Appointment.AppointmentRepository;
import com.example.tendo.model.Appointment.AppointmentService;
import com.example.tendo.model.Bundle.Bundle;
import com.example.tendo.model.Doctor.Doctor;
import com.example.tendo.model.Patient.Patient;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = {Appointment.class, AppointmentService.class})
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class AppointmentServiceTests {

    @Autowired
    private AppointmentService appointmentService;

    @MockBean
    private AppointmentRepository appointmentRepository;
    @BeforeAll
    public void setUp() {
        Bundle bundle = new Bundle();
        Doctor doctor = new Doctor();
        Patient patient = new Patient();

        Appointment appointment = new Appointment(
            "test",
                doctor,
                patient,
                bundle
        );

        Mockito.when(appointmentRepository.findAppointmentById(appointment.getId()))
                .thenReturn(Optional.of(appointment));
    }

    @Test
    public void whenValidId_thenAppointmentShouldBeFound() {
        String id = "test";
        Appointment found = appointmentService.getAppointment(id);
        assertThat(found.getId()).isEqualTo(id);
    }

}
