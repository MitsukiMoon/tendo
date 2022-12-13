import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Address, Appointment, Contact, Models } from "../../../model/Patient";
import { Link } from "../../../model/link";
import styles from "../../../../public/Nav.module.css";

export default function FeedbackForm({ data }) {
  console.log(data);
  const router = useRouter();
  const appointments = data.appointments;
  const { patientId } = router.query;

  return (
    <div>
      {appointments.map((appointment: Appointment) => {
        return (
          <div key={appointment.id}>
            <a href={`/patient/${patientId}/appointment/${appointment.id}`}>
              <h1> {appointment.id} </h1>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/api/v1/patient");
  const patients = await res.json();

  const paths = patients.map((patient) => ({
    params: { patientId: patient.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await axios.get(
    `http://localhost:8080/api/v1/patient/${params.patientId}`
  );
  const data = await result.data;

  return {
    props: {
      data: data,
    },
  };
}
