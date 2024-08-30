import React from "react";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import AppRoutes from "./Routes";
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
