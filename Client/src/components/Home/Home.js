// src/components/Home/Home.js
import React from "react";
import "./Home.css";
import Layout from "../Layout";
const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h2>Welcome to Tutoring App</h2>
        <p>
          This is the home page of the tutoring application. You can add more
          content, features, and styling as needed for your application.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
