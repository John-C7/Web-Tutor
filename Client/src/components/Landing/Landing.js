// src/components/Home/Landing.js
import React from "react";
import "./Landing.css";
import Header from "../Header/Header";
import LandingBody from "./LandingBody/LandingBody";
import LandingContact from "./LandingContact/LandingContact";
import Courses from "./Courses/Courses";
const Landing = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <Header className="Header" />
        <Courses />
      </div>
      <div className="home-content">
        <div className="landing-body">
          <LandingBody className="LandingBody" />
        </div>
        <div className="landing-contact">
          <LandingContact className="LandingContact" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
