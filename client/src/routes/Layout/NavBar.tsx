import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputModal from "../../routes/components/InputModal";


const NavBar = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <Nav>
      <NavBox>
        <NavTitle onClick={toHome}>Kurlculator</NavTitle>
      </NavBox>
      <NavButtonBox>
        <InputModal />
      </NavButtonBox>
    </Nav>
  );
};
export default NavBar;

const NavButtonBox = styled.div`
  position: absolute;
  display: inline-block;
  right: 12px;
`

const NavBox = styled.div`
  background-color: #5F0380;
  color: #efefef;
  position: relative;
  
`

const Nav = styled.nav`
  color: black;
  width: 100%;
  height: 160px;
  line-height: 40px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0.3px 0.3px 3px 3px #f0f0f0;
`;

const NavTitle = styled.h1`
  margin: 0;
  padding: 0 12px;
  cursor: pointer;
`;
