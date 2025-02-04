import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../authServices";
import "../assets/devdashboard.css";

const DeveloperDashboard = () => {
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
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png",
    },
    {
      id: 2,
      first_name: "Jane",
      role: "Backend Developer",
      bio: "Node.js expert with strong database skills...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png",
    },
    {
      id: 3,
      first_name: "Mike",
      role: "Full Stack Developer",
      bio: "Full stack developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png",
    },
    {
      id: 4,
      first_name: "Beryl",
      role: "Mobile Developer",
      bio: "Mobile developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png",
    },
    {
      id: 4,
      first_name: "Sheryl",
      role: "Front end Developer",
      bio: "Mobile developer with expertise in Swift",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png",
    },
    {
      id: 3,
      first_name: "Dickson",
      role: "Full Stack Developer",
      bio: "Full stack developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png",
    },
    {
      id: 4,
      first_name: "Borcas",
      role: "Mobile Developer",
      bio: "Mobile developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png",
    },
    {
      id: 3,
      first_name: "Dickson",
      role: "Full Stack Developer",
      bio: "Full stack developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png",
    },
    {
      id: 4,
      first_name: "Borcas",
      role: "Mobile Developer",
      bio: "Mobile developer with expertise in MERN stack...",
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367_960_720.png",
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
    authService.logout();
    navigate("/devlogin");
  };

  useEffect(() => {
    // Debugging logs
    console.log("Dashboard mounted");
    console.log("Current user:", authService.getCurrentUser());
    console.log("Token:", localStorage.getItem("token"));
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <Link to="/" className="nav-brand">
          Talent Kenya
        </Link>
        <div className="nav-links">
          <Link to="/developer/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/developer/dashboard" className="nav-link active">
            Talent
          </Link>
          <Link to="/developer/employers" className="nav-link">
            Employers
          </Link>
          <Link to="/developer/jobs" className="nav-link">
            Jobs
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
          </div>
        </div>

        <div className="developers-grid">
          {developers.map((developer) => (
            <div key={developer.id} className="developer-card">
              <div className="avatar-container">
                <img
                  src={developer.avatar}
                  alt={developer.first_name}
                  className="developer-avatar"
                />
              </div>
              <div className="developer-info">
                <div className="info-group">
                  <p className="info-label">First Name:</p>
                  <p className="info-value">{developer.first_name}</p>
                </div>

                <div className="info-group">
                  <p className="info-label">Role:</p>
                  <p className="info-value">{developer.role}</p>
                </div>

                <div className="info-group">
                  <p className="info-label">Bio:</p>
                  <p className="info-value bio">{developer.bio}</p>
                </div>

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

export default DeveloperDashboard;
