import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <NavTitle>kurly</NavTitle>
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
`;
