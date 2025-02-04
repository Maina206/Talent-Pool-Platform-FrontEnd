import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/empdashboard.css";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    role: "",
    experience: "",
    programming_languages: "",
    availability: "",
  });

  // Dummy data - replace with API call
  const developers = [
    {
      id: 1,
      first_name: "John",
      role: "Frontend Developer",
      bio: "Experienced React developer with 5 years of experience...",
      avatar: "/path-to-avatar.jpg",
    },
    {
      id: 2,
      first_name: "Jane",
      role: "Backend Developer",
      bio: "Node.js expert with strong database skills...",
      avatar: "/path-to-avatar.jpg",
    },
    {
      id: 3,
      first_name: "Mike",
      role: "Full Stack Developer",
      bio: "Full stack developer with expertise in MERN stack...",
      avatar: "/path-to-avatar.jpg",
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login/client");
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <Link to="/" className="nav-brand">
          Talent Kenya
        </Link>
        <div className="nav-links">
          <Link to="/employer/dashboard" className="nav-link active">
            Talent
          </Link>
          <Link to="/employer/post-job" className="nav-link">
            Post a Job
          </Link>
          <Link to="/employer/favorites" className="nav-link">
            Favorites
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            Log out
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="filter-section">
          <button className="filter-btn">Filter Search</button>
          <div className="filters">
            <select
              name="role"
              value={searchFilters.role}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Select Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>

            <select
              name="experience"
              value={searchFilters.experience}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Years of Experience</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>

            <select
              name="programming_languages"
              value={searchFilters.programming_languages}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Programming Language</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>

            <select
              name="availability"
              value={searchFilters.availability}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Availability</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="developers-grid">
          {developers.map((developer) => (
            <div key={developer.id} className="developer-card">
              <img
                src={developer.avatar}
                alt={developer.first_name}
                className="developer-avatar"
              />
              <div className="developer-info">
                <p className="info-label">First Name:</p>
                <p className="info-value">{developer.first_name}</p>

                <p className="info-label">Role:</p>
                <p className="info-value">{developer.role}</p>

                <p className="info-label">Bio:</p>
                <p className="info-value bio">{developer.bio}</p>

                <Link
                  to={`/developer/${developer.id}`}
                  className="view-more-btn"
                >
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
