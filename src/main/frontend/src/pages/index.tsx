import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Name } from "../model/Patient";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

function HomePage() {
  return <Home />;
}

export default HomePage;
