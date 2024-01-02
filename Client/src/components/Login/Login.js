import React, { useState } from "react";
import { FaUserGraduate, FaUserTie, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginApi from "../../services/api";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const Login = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApi.loginUser({
        username,
        password,
        isTeacher: isTeacherMode,
      });

      // Assuming the response includes information about the user type
      const userType = response.userType;

      // Redirect based on user type
      if (userType === "teacher") {
        navigate("/teacher-dashboard");
      } else if (userType === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setError("Wrong username or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can use the user information from Google to update your database or perform other actions.

      console.log("User logged in with Google:", user);
      navigate("/home"); // Redirect to the desired page after Google login
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>{isTeacherMode ? "Teacher Login" : "Student Login"}</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {isTeacherMode ? <FaUserTie /> : <FaUserGraduate />}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock />
        </div>
        <label>
          <input
            type="checkbox"
            checked={isTeacherMode}
            onChange={() => setIsTeacherMode(!isTeacherMode)}
          />
          Teacher
        </label>
        <button type="submit" className="login-btn">
          Login
        </button>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a href="http://localhost:3000/signup">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
