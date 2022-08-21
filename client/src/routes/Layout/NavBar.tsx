import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <Nav>
      <NavTitle onClick={toHome}>kurly</NavTitle>
    </Nav>
  );
};
export default NavBar;

const Nav = styled.nav`
  background-color: #8b00ff;
  color: white;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 0 0 4px 4px;
`;

const NavTitle = styled.h1`
  margin: 0;
  padding: 0 12px;
  cursor: pointer;
`;
