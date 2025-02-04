import { Navigate } from "react-router-dom";
import authService from "./authServices";

const ProtectedRoute = ({ children }) => {
  const user = authService.getCurrentUser();
  const userType = localStorage.getItem("userType");

  if (!user) {
    // Redirect to appropriate login based on the route
    return (
      <Navigate to={userType === "developer" ? "/devlogin" : "/clientlogin"} />
    );
  }

  return children;
};

export default ProtectedRoute;
