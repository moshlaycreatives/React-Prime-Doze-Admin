import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthRole, getHomePathForRole } from "../utils/authStorage.js";

const ProtectedRoute = ({ allowedRole, children }) => {
  const role = getAuthRole();
  const location = useLocation();

  if (!role) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (role !== allowedRole) {
    return <Navigate to={getHomePathForRole(role)} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  allowedRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
