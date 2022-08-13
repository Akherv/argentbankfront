import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/argentBankLogo.png";

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

function NavBar() {
  return (
    <Nav>
      <NavLogoLink to="./">
        <Logo src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLogoLink>
      <div>
        <NavItemLink to="./signin">
          <i className="fa fa-user-circle"></i> Sign In
        </NavItemLink>
        {/* <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a> */}
      </div>
    </Nav>
  );
}
export default NavBar;
