import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  title: string;
  content: string;
}

const Menu = ({ title, content }: Props) => {
  const navigate = useNavigate();
  const [navi, setNavi] = useState();

  const tagIcon = {
    냉장고: "/frige",
    영양사: "/nutritionist",
  }[title];

  const onClick = () => {
    if (!tagIcon) return;
    navigate(tagIcon);
  };

  return (
    <MenuSection onClick={onClick}>
      <Titleh4>{title}</Titleh4>
      <div>{content}</div>
    </MenuSection>
  );
};

export default Menu;

const Titleh4 = styled.h4`
  color: #5F0380;
`

const MenuSection = styled.section`
  width: 300px;
  height: 350px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fdfdfd;
  border: solid 1px #ececec;
  box-shadow: 0.3px 0.3px 0.3px 0.3px #ececec;
  cursor: pointer;
`;

