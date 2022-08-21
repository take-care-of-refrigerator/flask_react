import styled from "styled-components";
import Menu from "./Menu";
import Calendar from "../Calendar";

import { firstMenuState, secondMenuState } from "../../../states/frigeState";
import { useRecoilState } from "recoil";

import { useLocation } from "react-router-dom";

const RightMenu = () => {
  const { pathname } = useLocation();
  const [firstMenu] = useRecoilState(firstMenuState);
  const [secondMenu] = useRecoilState(secondMenuState);
  return (
    <Aside>
      <Menu title={firstMenu} content={"content1"} />
      {pathname === "/nutritionist" ? (
        <Calendar />
      ) : (
        <Menu title={secondMenu} content={"content2"} />
      )}
    </Aside>
  );
};

export default RightMenu;

const Aside = styled.aside`
  padding: 30px;
`;
