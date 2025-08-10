import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const rol_id = parseInt(localStorage.getItem('rol_id'), 10);

  const homePaths = {
    1: "/cliente",
    2: "/gimnasio",
    3: "/superadmin",
  };

  const redirectPath = homePaths[rol_id];
  if (token && redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;