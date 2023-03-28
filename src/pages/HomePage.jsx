import React from "react";
import { Navigate } from "react-router-dom";

export const HomePage = ({ isLogged }) => {
  if (!isLogged) {
    return <Navigate to="/"> </Navigate>;
  }

  return <div>HomePage</div>;
};
