import styled from "styled-components";

function SignInButton() {
  return <SignInButtonContainer>SignIn</SignInButtonContainer>;
}
export default SignInButton;

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
