import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth.token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
