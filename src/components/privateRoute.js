import React from 'react';
import { Navigate } from 'react-router-dom';

//Componente para proteccion de rutas a usuarios no autenticados
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
