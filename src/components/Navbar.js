import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/argentBankLogo.png";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { getInfoUser } from "../slices/infoSlice";

function NavBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const info = useSelector((state) => state.info);
  // console.log(auth, info);
  useEffect(() => {
    if (auth.token) {
      dispatch(getInfoUser(auth.token));
    }
  }, [auth.token, dispatch]);
  return (
    <Nav>
      <NavLogoLink to="./">
        <Logo src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLogoLink>
      <div>
        {auth.id ? (
          <NavItemLink to="/" onClick={() => dispatch(logoutUser(null))}>
            <i className="fa fa-user-circle"></i>
            {info.firstName}&nbsp;
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavItemLink>
        ) : (
          <NavItemLink to="./signin">
            <i className="fa fa-user-circle"></i> Sign In
          </NavItemLink>
        )}
      </div>
    </Nav>
  );
}
export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
`;

const NavLogoLink = styled(StyledLink)`
  display: flex;
  align-items: center;
`;

const NavItemLink = styled(StyledLink)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;
