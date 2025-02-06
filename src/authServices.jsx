import axios from "axios";

const API_URL = "https://talent-pool-platform-backend.onrender.com";

const authService = {
  // Existing employer login
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login/employer`, {
        email,
        password,
      });

      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.access_token);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "An error occurred during login";
    }
  },

  // Add developer login
  developerLogin: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login/developer`, {
        email,
        password,
      });

      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userType", "developer");
      }

      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "An error occurred during login";
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  registerEmployer: async (employerData) => {
    try {
      const response = await axios.post(
        `${API_URL}/register/employer`,
        employerData
      );
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  },

  registerDeveloper: async (developerData) => {
    try {
      console.log("Sending developer data:", developerData);

      const response = await axios.post(
        `${API_URL}/register/developer`,
        developerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server response:", response);
      return response.data;
    } catch (error) {
      console.error("Registration error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw (
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  },
}; // Note the removal of trailing comma and proper closing of the object

export default authService;
