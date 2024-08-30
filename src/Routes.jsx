import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MainCarousel from "./pages/MainCarousel";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainCarousel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
