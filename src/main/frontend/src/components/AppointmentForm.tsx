import React from "react";
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FormProvider,
} from "react-hook-form";
import { Appointment, AppointmentPlan } from "../model";
import { AppointmentBaseForm } from "./AppointmentBaseForm";
import { Button } from "@mui/material";

const defaultValues: Appointment = {
  title: "",
  date: new Date().toString(),
  plan: AppointmentPlan.Basic,
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    callMeBack: false,
  },
  pets: [
    {
      name: "",
      breed: "",
      description: "",
    },
  ],
};

export const AppointmentForm = () => {
  const form: UseFormReturn<Appointment, UseFormProps> = useForm<Appointment>({
    defaultValues,
  });

  const submitForm = (form: Appointment) => {
    console.log(form);
  };

  const resetForm = () => {
    form.reset(defaultValues);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <h1 className="font-semibold mb-6 text-2xl text-center">
          Create a new appointment
        </h1>

        <AppointmentBaseForm />

        <div className="flex items-center space-x-4 mt-4">
          <div className="flex-1">
            <Button type="button" variant="text" fullWidth onClick={resetForm}>
              Clear
            </Button>
          </div>
          <div className="flex-grow">
            <Button type="submit" variant="outlined" fullWidth>
              Make an appointment!
            </Button>
          </div>
        </div>
      </form>
      {/* set up the dev tool */}
      {/* <DevTool control={form.control} /> */}
    </FormProvider>
  );
};

export default AppointmentForm;
