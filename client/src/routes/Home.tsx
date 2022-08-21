import Calendar from "./components/Calendar";
import RightMenu from "./components/RightMenu";

import { firstMenuState, secondMenuState } from "../states/frigeState";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

import InputModal from "../routes/components/InputModal";

const Home = () => {
  const [, setFirstMenu] = useRecoilState(firstMenuState);
  const [, setSecondMenu] = useRecoilState(secondMenuState);

  useEffect(() => {
    setFirstMenu("냉장고");
    setSecondMenu("영양사");
  }, []);
  return (
    <>
      <InputModal />
      <Calendar />
      <RightMenu />
    </>
  );
};
export default Home;
