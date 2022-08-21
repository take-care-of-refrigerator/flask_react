import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

import { useRecoilState } from "recoil";
import { isModalState } from "../../states/frigeState";

const Layout = () => {
  const [, setIsModal] = useRecoilState(isModalState);
  return (
    <div>
      <NavBar />
      <Main onClick={() => setIsModal(false)}>
        <Outlet />
      </Main>
    </div>
  );
};
export default Layout;

const Main = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;
