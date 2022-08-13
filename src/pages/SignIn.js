import styled from "styled-components";
import SignInButton from "../components/SignInButton";

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

function SignIn() {
  return (
    <main className="main bg-dark">
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>
          <SignInButton />
        </form>
      </SignInContent>
    </main>
  );
}
export default SignIn;
