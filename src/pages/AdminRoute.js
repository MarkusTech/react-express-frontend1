import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ user, path = "/", children }) => {
  if (!user.is_admin) {
    return <Navigate to={path} replace />;
  }
  return children;
};

export default AdminRoute;
