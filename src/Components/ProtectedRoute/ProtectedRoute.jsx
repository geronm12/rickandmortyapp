import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const { sesion } = useContext(DataProvider);
  const location = useLocation();

  if (sesion === undefined || sesion === null || sesion.isLogged === false) {
    return <Navigate to="/login" state={location}></Navigate>;
  }

  return children;
};
