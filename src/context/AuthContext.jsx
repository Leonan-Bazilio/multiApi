import React, { createContext, useState, useEffect } from "react";
import {
  checkAuth,
  login as performLogin,
  logout as performLogout,
} from "../utils/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const login = async (username, password) => {
    const success = await performLogin(username, password);
    if (success) {
      setAuthenticated(true);
    }
    return success;
  };

  const logout = () => {
    performLogout();
    setAuthenticated(false);
  };

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuthenticated = await checkAuth();
      setAuthenticated(isAuthenticated);
    };
    verifyAuth();
  }, []);

  if (authenticated === null) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
