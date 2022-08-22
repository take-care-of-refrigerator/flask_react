import NavBar from "./NavBar";
import {Outlet, useLocation} from "react-router-dom";

import styled from "styled-components";

import { useRecoilState } from "recoil";
import { isModalState } from "../../states/frigeState";
import {useEffect, useRef} from "react";

const Layout = () => {
  const { pathname } = useLocation();

  const [, setIsModal] = useRecoilState(isModalState);
  useEffect(() => {
    setIsModal(false)
  }, [pathname]);
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

