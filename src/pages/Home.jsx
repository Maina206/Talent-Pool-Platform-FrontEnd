import React from "react";
import { Link } from "react-router-dom";
import "../assets/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="top-nav">
        <div className="brand">Talent Kenya</div>
        <div className="login-links">
          <Link to="/devlogin" className="login-link">
            Developer Log In
          </Link>
          <Link to="/clientlogin" className="login-link">
            Client Log In
          </Link>
        </div>
      </nav>

      <main className="main-content">
        <div className="welcome-section">
          <h1 className="main-title">Talent Kenya</h1>
          <p className="welcome-text">
            Connecting talented Kenyan developers with innovative companies.
            Join our platform to find the perfect match for your tech journey.
          </p>
        </div>

        <div className="signup-section">
          <h2 className="signup-title">Choose Your Path</h2>
          <div className="signup-buttons">
            <Link to="/regdev" className="signup-button developer">
              Developer Sign Up
            </Link>
            <Link to="/regempl" className="signup-button client">
              Client Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
