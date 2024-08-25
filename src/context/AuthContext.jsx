import React, { createContext, useState, useEffect } from "react";
import {
  checkAuth,
  login as performLogin,
  logout as performLogout,
} from "../utils/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

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
    (async () => {
      const isAuthenticated = await checkAuth();
      setAuthenticated(isAuthenticated);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
