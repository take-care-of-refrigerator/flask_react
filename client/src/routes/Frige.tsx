import RightMenu from "./components/RightMenu";
import FrigeComp from "./components/FrigeComp";

import {
  firstMenuState,
  secondMenuState,
  frigeState,
} from "../states/frigeState";
import { useEffect, useMemo } from "react";

import { FrigeLi, FrigeUl } from "./components/FrigeList";
import { useRecoilState } from "recoil";

import InputModal from "../routes/components/InputModal";

const Frige = () => {
  const [, setFirstMenu] = useRecoilState(firstMenuState);
  const [, setSecondMenu] = useRecoilState(secondMenuState);
  const [frige, setFrige] = useRecoilState(frigeState);

  useEffect(() => {
    setFirstMenu("꼭");
    setSecondMenu("추천 제품");
  }, [frige]);


  const memo = useMemo(() => {
    return frige.map(
      (item, index) => {
        return <FrigeLi key={item.name + index}>
          {item.content}
          <FrigeComp arr={[]}/>
        </FrigeLi>;
      }
    );
  }, [frige]);

  return (
    <>
      <div>
        <FrigeUl>{memo}</FrigeUl>
      </div>
      <RightMenu />
    </>
  );
};
export default Frige;
