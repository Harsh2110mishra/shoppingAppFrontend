import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4 dark-text">About Us</h1>
            <p className="lead mb-4">
              I am Harsh Mishra, experienced react native developer with a
              demonstrated history of working in the education management
              industry. Skilled in React Native, React.js, Firebase, Full-Stack
              Development, Javascript, HTML, and Linux Server. Strong
              engineering professional with a Bachelor of Technology - BTech
              focused in Computer Science from Guru Gobind Singh Indraprastha
              University.
            </p>
            <NavLink to="/contact" className="btn btn-dark px-3 w-100 mt-4">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
