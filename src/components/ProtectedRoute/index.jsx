import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? children : <Navigate to="/Login" />;
}
