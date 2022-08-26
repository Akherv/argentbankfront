import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavbarH from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import { loadUser } from "./slices/authSlice";

export default function App() {
  //Initialize the dispatch method for updating the store(auth state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // Router logic
  return (
    <>
      <Router>
        <NavbarH />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route path="notFound" element={<Error />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
