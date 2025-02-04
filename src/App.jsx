import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectRouter";
import RegisterDeveloper from "./pages/RegisterDeveloper";
import HomePage from "./pages/Home";
import RegEmployer from "./pages/RegEmployer";
import DevLogin from "./pages/DevLogin";
import ClientLogin from "./pages/ClientLogin";
import EmployerDashboard from "./pages/EmplDashboard";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DeveloperProfile";
import EmployersList from "./pages/EmployerList";
import JobsList from "./pages/JobList";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/regdev" element={<RegisterDeveloper />} />
        <Route path="/regempl" element={<RegEmployer />} />
        <Route path="/devlogin" element={<DevLogin />} />
        <Route path="/clientlogin" element={<ClientLogin />} />

        {/* Protected Employer Routes */}
        <Route
          path="/employer/dashboard"
          element={
            <ProtectedRoute>
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Developer Routes */}
        <Route
          path="/developer/dashboard"
          element={
            <ProtectedRoute>
              <DeveloperDashboard />
            </ProtectedRoute>
          }
        />
        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
