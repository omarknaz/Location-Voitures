import React from 'react'
import { Route, Navigate } from "react-router-dom";



export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token")
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };