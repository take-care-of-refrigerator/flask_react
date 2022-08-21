import { FrigeLi } from "./components/FrigeList";
import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";
import { FrigeUl } from "./components/FrigeList";

const NuttriData = [{ data: 1 }, { data: 2 }, { data: 3 }];

const Nutritionist = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <NutritionistContainer>
      <FrigeUl>
        {NuttriData.map((item, index) => {
          return (
            <FrigeLi key={item.data + index} onClick={() => navigate("/menu")}>
              {item.data}
            </FrigeLi>
          );
        })}
      </FrigeUl>
      {path === "nutritionist" ? (
        ""
      ) : (
        <ItemUl>
          {NuttriData.map((item, index) => {
            return <ItemList key={item.data + index}>{item.data}</ItemList>;
          })}
        </ItemUl>
      )}
    </NutritionistContainer>
  );
};

export default Nutritionist;

const NutritionistContainer = styled.div`
  margin: 0 auto;
`;

const ItemUl = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 400px;
  justify-content: space-evenly;
`;
const ItemList = styled.li`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;
