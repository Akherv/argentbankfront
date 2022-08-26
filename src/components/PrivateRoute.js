import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Custom component for handling the redirection to the sign in page if there is no auth.token
const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth.token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
