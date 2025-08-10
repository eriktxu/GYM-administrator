import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types'; // Para validación de props

const PrivateRoute = ({ allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem('token');
  const rol_id = localStorage.getItem('rol_id');

  const isAuth = !!token && !!rol_id;
  setIsAuthenticated(isAuth);
  setUserRole(isAuth ? parseInt(rol_id, 10) : null);
  setIsLoading(false);
}, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.number).isRequired, // ← ahora son números
};


export default PrivateRoute;