import styled from "styled-components";
import Menu from "./Menu";

const RightMenu = () => {
  return (
    <Aside>
      <Menu />
      <Menu />
    </Aside>
  );
};

export default RightMenu;

const Aside = styled.aside``;
