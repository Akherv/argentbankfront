import { Link } from "react-router-dom";
import styled from "styled-components";

const SignInButtonContainer = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

function SignInButton() {
  return (
    <SignInButtonContainer>
      <Link to={"/user"}>SignIn</Link>
    </SignInButtonContainer>
  );
}
export default SignInButton;
