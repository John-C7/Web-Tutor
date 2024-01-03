// src/App.js
import "./Alerts.css";
import React from "react";
import Countdown from "./Countdown";
import Layout from "../Layout";
function Alerts() {
  return (
    <Layout>
      <div className="Alerts">
        <Countdown />
      </div>
    </Layout>
  );
}

export default Alerts;
