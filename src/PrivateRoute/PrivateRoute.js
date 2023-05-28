import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, fallback, children }) => {
  if (!isAuth) return <Navigate to={fallback} />;
  return children;
};

export default PrivateRoute;
