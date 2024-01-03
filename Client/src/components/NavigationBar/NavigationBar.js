import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const restrictedRoutes = ["/login", "/signup", "/"];

  const [showVerticalNav, setShowVerticalNav] = useState(false);

  const toggleVerticalNav = () => {
    setShowVerticalNav(!showVerticalNav);
  };

  if (restrictedRoutes.includes(location.pathname)) {
    return null; // Do not render NavigationBar for restricted routes
  }

  return (
    <div>
      <nav className={`navbar ${showVerticalNav ? "vertical-nav" : ""}`}>
        {showVerticalNav && (
          <ul className="vertical-nav-list">
            <li className="nav-item-v">
              <Link to="/course">Course</Link>
            </li>
            <li className="nav-item-v">
              <Link to="/classscheduler">Class</Link>
            </li>
            <li className="nav-item-v">
              <Link to="/assignments">Assignments</Link>
            </li>
            <li className="nav-item-v">
              <Link to="/chatbot">Chatbot</Link>
            </li>
            <li className="nav-item-v">
              <Link to="/receipts">Receipts</Link>
            </li>
          </ul>
        )}

        <ul className="nav-list">
          <div className="hamburger-icon" onClick={toggleVerticalNav}>
            &#9776;
          </div>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/studentdashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/chatbot">AI</Link>
          </li>
          <li className="nav-item">
            <Link to="/alerts">Alerts</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
