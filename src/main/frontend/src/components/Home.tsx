import { Controller, useForm } from "react-hook-form";
import { Name } from "../model/Patient";
import axios from "axios";
import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/appointment"
    );
    setCharacters(data);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  // @ts-ignore
  return <h1> {JSON.stringify(characters)}</h1>;
};

export default function Home() {
  const { handleSubmit, control } = useForm();
  const submitForm = async (data: Name) => {
    console.log("Submission starting", data);
    const givenName = data.givenName;
    const familyName = data.familyName;
    const result = await axios.get(
      `http://localhost:8080/api/v1/patient/givenName/${givenName}/familyName/${familyName}`
    );
    window.location.href = `/patient/${result.data.id}`;
    console.log("Submitting complete", result.data);
  };

  return (
    <>
      <h1>
        {" "}
        Welcome to the patient portal. Please enter your name to access your
        records.
      </h1>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(submitForm)}>
          <Controller
            name="givenName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="First Name"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "First name required" }}
          />
          <Controller
            name="familyName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Last Name"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Last name required" }}
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
