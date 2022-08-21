import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { rememberUser } from "../slices/authSlice";
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

  const [keepUser, setKeepUser] = useState(false);

  useEffect(() => {
    if (auth.id) {
      navigate("/profile");
    }
  }, [auth.id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    dispatch(rememberUser(keepUser));
  };

  return (
    <main className="main bg-dark">
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>SignIn</h1>
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
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setKeepUser(!keepUser)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>
          <SignInButton type="submit" />
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
