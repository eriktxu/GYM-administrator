import { Navigate } from 'react-router-dom';


//Contrario a private route, aqui se protege la pantalla de login 
// y registro si hay una sesion activa
const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/administracion" /> : children;
};

export default PublicRoute;
