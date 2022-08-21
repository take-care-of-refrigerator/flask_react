import RightMenu from "./components/RightMenu";
import FrigeComp from "./components/FrigeComp";

import styled from "styled-components";

const diaryData = [
  { diary: "diary1" },
  { diary: "diary2" },
  { diary: "diary3" },
];

const Diary = () => {
  return (
    <>
      <DiaryContainer>
        <DiaryUl>
          {diaryData.map((item, index) => {
            return <DiaryLi key={item.diary + index}>
              <h3>{item.diary}</h3>
              <FrigeComp arr={[]}/>
            </DiaryLi>;
          })}
        </DiaryUl>
      </DiaryContainer>
      <RightMenu />
    </>
  );
};

export default Diary;

const DiaryContainer = styled.div``;

const DiaryUl = styled.ul`
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
`;

const DiaryLi = styled.li`
  height: 500px;
  width: 200px;
  background-color: #ececec;
  border-radius: 4px;
`;
