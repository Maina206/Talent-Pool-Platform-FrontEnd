import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../authServices";
import "../assets/devlogin.css";

const DevLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await authService.developerLogin(
        formData.email,
        formData.password
      );
      console.log("Login successful:", response);

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      // Redirect to developer dashboard
      navigate("/developer/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to login. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Developer Login</h1>
        <p className="login-subtitle">
          Welcome back! Access your developer dashboard
        </p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className={error ? "error" : ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
              className={error ? "error" : ""}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
                disabled={isLoading}
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="forgot-password"
              tabIndex={isLoading ? -1 : 0}
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-text">Signing in...</span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="register-prompt">
          Don't have a developer account?{" "}
          <Link to="/regdev" tabIndex={isLoading ? -1 : 0}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DevLogin;
