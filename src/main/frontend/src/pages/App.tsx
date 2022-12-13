import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "../components/AppContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./index";
import Patient from "./patient";
import PatientYeah from "./patient/[patientId]";


import "../styles/global.scss";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* The next line is very important for the Navigate component to work */}
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/{id}" element={<PatientYeah />} />
      </Routes>
    </div>
  );
}

export default App;
