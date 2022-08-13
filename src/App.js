import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import NavbarH from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

export default function App() {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const url = config.url.REACT_APP_API_URL_USER;
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(url);
  //       const datas = await res.json();
  //       setUser(datas);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <NavbarH />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="notFound" element={<Error />} />
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
