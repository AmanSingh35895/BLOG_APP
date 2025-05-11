import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      return null;
    }
  });

  const login = async (inputs) => {
    try {
      const res = await axios.post("/api/v1/auth/login", inputs);
      setCurrentUser(res.data);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data,
      };
    }
  };

  const logout = async () => {
    try {
      const res = await axios.post("/api/v1/auth/logout");
      setCurrentUser(null);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data,
      };
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
