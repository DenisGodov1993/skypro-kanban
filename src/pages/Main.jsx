import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TasksContext } from "../context/TasksContext";
// import { TasksProvider } from "../context/TasksProvider";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  /* background-color: #f1f1f1; */
`;

const MainPage = ({ loading }) => {
  const { loading: tasksLoading } = useContext(TasksContext);

  // выбираем, что показывать — либо загрузку страницы, либо загрузку задач
  const isLoading = loading || tasksLoading;

  return (
    // <TasksProvider>
      <Wrapper>
        <Header />
        <Main loading={isLoading} />
        <Outlet />
      </Wrapper>
    // </TasksProvider>
  );
};

export default MainPage;


// import { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import { TasksContext } from "../context/TasksContext";
// import { TasksProvider } from "../context/TasksProvider";
// import Header from "../components/Header/Header";
// import Main from "../components/Main/Main";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   /* background-color: #f1f1f1; */
// `;

// const MainPage = ({ loading }) => {
//   const { loading: tasksLoading } = useContext(TasksContext);

//   // выбираем, что показывать — либо загрузку страницы, либо загрузку задач
//   const isLoading = loading || tasksLoading;

//   return (
//     <TasksProvider>
//       <Wrapper>
//         <Header />
//         <Main loading={isLoading} />
//         <Outlet />
//       </Wrapper>
//     </TasksProvider>
//   );
// };

// export default MainPage;
