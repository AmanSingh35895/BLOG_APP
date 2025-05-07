import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")),
  );

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
