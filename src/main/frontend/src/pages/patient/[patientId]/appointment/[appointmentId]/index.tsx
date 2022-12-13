import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FormMultiStep, FormMultiStepSchema } from "../../../../../components";

function explanationResponse(explanation: String): String {
  if (explanation.includes("Yes")) {
    return "We're glad to hear that the doctor was helpful.";
  } else if (explanation.includes("No")) {
    return "We're sorry to hear that. Please call us at (XXX)-XXX-XXXX if you would like to be consulted by another doctor.";
  } else {
    return "Please call us at (XXX)-XXX-XXXX if you would like additional information.";
  }
}

export default function FeedbackForm({
  appointmentData,
  patientData,
  doctorData,
  diagnosisData,
}): JSX.Element {
  const router = useRouter();
  const { patientId, appointmentId } = router.query;

  const diagnosis = diagnosisData.at(0);

  const formMultiStepDefaultData = {
    Rating: "5",
    Explanation: "",
    Feeling: "",
  };

  const [formMultiStepData, setformMultiStepDat] = useState(
    formMultiStepDefaultData
  );

  function handleFormChange(e) {
    setformMultiStepDat(e);
  }

  const formMultiStepSchema: FormMultiStepSchema = {
    1: {
      type: "radio",
      id: "ratingResponse",
      name: `Rating`,
      label: `Hi ${patientData.name.givenName}, on a scale of 1-10, would you recommend Dr. ${doctorData.name.familyName} to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend`,
      defaultChecked: false,
      value: "5",
      values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    2: {
      type: "text",
      id: "diagnosisExplanation",
      name: "Explanation",
      label: `Thank you. You were diagnosed with ${diagnosis.code.name}. Did Dr. ${doctorData.name.familyName} explain how to manage this diagnosis in a way you could understand?`,
    },
    3: {
      type: "text",
      id: "diagnosisFeeling",
      name: "Feeling",
      label:
        explanationResponse(formMultiStepData.Explanation) +
        ` We appreciate the feedback, one last question: how do you feel about being diagnosed with ${diagnosis.code.name}?`,
    },
    4: {
      type: "submit",
      id: "unique-id-of-the-submit-control",
      name: "submit",
      label: "Thanks again! Here’s what we heard:",
      value: "Confirm your details",
    },
  };

  const apiData = {
    doctorId: doctorData.id,
    appointmentId: appointmentData.id,
  };

  return (
    <FormMultiStep
      id="any-id-you-want"
      formSchema={formMultiStepSchema}
      formData={formMultiStepDefaultData}
      apiData={apiData}
      onChange={(formData) => handleFormChange(formData.form)}
    />
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/api/v1/appointment");
  const appointments = await res.json();

  let paths: any[] = [];

  console.log(res);

  for (let appointment of appointments) {
    const res = await fetch(
      `http://localhost:8080/api/v1/appointment/${appointment.id}/patient`
    );
    const patient = await res.json();
    paths.push({
      params: {
        appointmentId: appointment.id,
        patientId: patient.id,
      },
    });
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const appointment = await axios.get(
    `http://localhost:8080/api/v1/patient/${params.patientId}/appointment/${params.appointmentId}`
  );
  console.log("Hello");
  const appointmentData = await appointment.data;

  const patient = await axios.get(
    `http://localhost:8080/api/v1/patient/${params.patientId}`
  );
  const patientData = await patient.data;

  const doctor = await fetch(
    `http://localhost:8080/api/v1/appointment/${params.appointmentId}/doctor`
  );
  const doctorData = await doctor.json();

  const diagnosis = await fetch(
    `http://localhost:8080/api/v1/appointment/${params.appointmentId}/diagnoses`
  );
  const diagnosisData = await diagnosis.json();

  console.log(doctorData);

  return {
    props: {
      appointmentData: appointmentData,
      patientData: patientData,
      doctorData: doctorData,
      diagnosisData: diagnosisData,
    },
  };
}
