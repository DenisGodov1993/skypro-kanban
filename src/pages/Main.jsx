import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { TasksProvider } from "../context/TasksProvider";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
const MainPage = () => {
  return (
    <TasksProvider>
      <Wrapper>
        <Header />
        <Main />
        <Outlet />
      </Wrapper>
    </TasksProvider>
  );
};

export default MainPage;
