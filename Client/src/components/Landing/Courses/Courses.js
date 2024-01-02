import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  return (
    <>
      <section className="Courses">
        <div className="container">
          <div className="row">
            <h2 className="courses-title">Best Online Education Expertise</h2>
            <p>
              Learn from your prefered Tutors based on your learning styles.
            </p>
            <Link to="/signup" className="signup-btn">
              GET STARTED
            </Link>

            <Link to="/courses" className="view-courses-btn">
              VIEW COURSES
            </Link>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Courses;
