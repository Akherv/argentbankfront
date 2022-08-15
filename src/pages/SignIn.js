import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignInButton from "../components/SignInButton";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.id) {
      navigate("/user");
    }
  }, [auth.id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <main className="main bg-dark">
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>
          <SignInButton />
          {/* {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
          {auth.registerStatus === "rejected" ? (
            <p>{auth.registerError}</p>
          ) : null} */}
        </form>
      </SignInContent>
    </main>
  );
}
export default SignIn;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  & label {
    font-weight: bold;
  }
  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const InputRemember = styled.div`
  display: flex;
  & label {
    margin-left: 0.25rem;
  }

  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;
