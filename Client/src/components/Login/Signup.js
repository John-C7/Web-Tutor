// components/Login/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Signup.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase.js";
const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (e) => {
    const userType = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      userType: userType,
    }));
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can use the user information from Google to update your database or perform other actions.

      console.log("User signed up with Google:", user);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const handleSubmit = async (e) => {
    // Fix: Change from handleSignup to handleSubmit
    e.preventDefault();

    try {
      const response = await api.signupUser(formData);
      console.log("User signed up successfully:", response);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <div className="ipbox">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ipbox">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ipbox">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ipbox">
          <label>
            User Type:
            <select
              name="userType"
              value={formData.userType}
              onChange={handleUserTypeChange}
            >
              <option value="">Select User Type</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </label>
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleSignup}
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
