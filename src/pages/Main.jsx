import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TasksContext } from "../context/TasksContext";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

const MainPage = ({ loading }) => {
  const { loading: tasksLoading } = useContext(TasksContext);

  const isLoading = loading || tasksLoading;

  return (
    <Wrapper>
      <Header />
      <Main loading={isLoading} />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
