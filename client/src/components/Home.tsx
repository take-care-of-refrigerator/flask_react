import Calendar from "./comp/Calendar";
import RightMenu from "./comp/RightMenu";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Calendar />
      <RightMenu />
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
`;
