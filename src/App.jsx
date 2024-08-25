import React from "react";
import { AuthProvider } from "./context/AuthContext";
import MainCarousel from "./pages/MainCarousel";
import "./App.css";
function App() {
  return (
    <AuthProvider>
      <MainCarousel />
    </AuthProvider>
  );
}

export default App;
