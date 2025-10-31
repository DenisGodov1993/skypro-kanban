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

// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";
// import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

// const MainPage = ({ setIsAuth }) => {
//   const [showNewCard, setShowNewCard] = useState(false);

//   const handleOpenNewCard = () => setShowNewCard(true);
//   const handleCloseNewCard = () => setShowNewCard(false);

//   return (
//     <>
//       <div className="wrapper">
//         <Header setIsAuth={setIsAuth} onOpenNewCard={handleOpenNewCard} />
//         <Main />
//         {showNewCard && <PopNewCard onClose={handleCloseNewCard} />}
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default MainPage;

// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header/Header";
// import Main from "../components/Main/Main";
// import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

// const MainPage = () => {
//   const [showNewCard, setShowNewCard] = useState(false);

//   const handleOpenNewCard = () => setShowNewCard(true);
//   const handleCloseNewCard = () => setShowNewCard(false);

//   return (
//     <div className="wrapper">
//       <Header onOpenNewCard={handleOpenNewCard} />
//       <Main />
//       {showNewCard && <PopNewCard onClose={handleCloseNewCard} />}
//       <Outlet />
//     </div>
//   );
// };

// export default MainPage;


// // MainPage.jsx
// import { useState } from "react";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";
// import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
// import { TasksProvider } from "../context/TasksProvider";

// const MainPage = ({ setIsAuth }) => {
//   const [showNewCard, setShowNewCard] = useState(false);

//   const handleOpenNewCard = () => setShowNewCard(true);
//   const handleCloseNewCard = () => setShowNewCard(false);

//   return (
//     // <TasksProvider>
//     <>
//       <div className="wrapper">
//         <Header setIsAuth={setIsAuth} onOpenNewCard={handleOpenNewCard} />
//         <Main />
//         {showNewCard && <PopNewCard onClose={handleCloseNewCard} />}
//       </div>
//     </>
//     // </TasksProvider>
//   );
// };

// export default MainPage;

// import { Outlet } from "react-router-dom";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";
// import { TasksProvider } from "../context/TasksProvider";

// const MainPage = ({ setIsAuth }) => {
//   return (
//     <TasksProvider>
//       <div className="wrapper">
//         <Header setIsAuth={setIsAuth} />
//         <Main />
//       </div>
//       <Outlet />
//     </TasksProvider>
//   );
// };

// export default MainPage;

// // import { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";
// // import { TasksContext } from "../context/TasksContext";
// import { TasksProvider } from "../context/TasksProvider";

// const MainPage = ({ setIsAuth }) => {
//   // const { tasks, loading, error } = useContext(TasksContext);

//   return (
//     <TasksProvider>
//       <div className="wrapper">
//         <Header setIsAuth={setIsAuth} />
//         {/* <Main error={error} tasks={tasks} loading={loading} /> */}
//         <Main />
//       </div>
//       <Outlet />
//     </TasksProvider>
//   );
// };

// export default MainPage;

// import { useCallback, useEffect, useState } from "react";
// import { fetchKanban } from "../services/api";
// import { Outlet } from "react-router-dom";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";
// import { TasksProvider } from "../context/TasksProvider";

// // import PopUser from "../components/popups/PopUser/PopUser";
// // import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
// // import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

// const MainPage = ({ setIsAuth }) => {
//   const [loading, setLoading] = useState(false);
//   const [cardList, setCardList] = useState([]);
//   const [error, setError] = useState("");

//   const getCardList = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await fetchKanban({
//         token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
//       });
//       if (data) setCardList(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     getCardList();
//   }, [getCardList]);

//   return (
//     <TasksProvider>
//       <>
//         <div className="wrapper">
//           {/* <PopUser /> */}
//           {/* <PopNewCard /> */}
//           {/* <PopBrowse /> */}

//           <Header setIsAuth={setIsAuth} />
//           <Main error={error} cardList={cardList} loading={loading} />
//         </div>
//         <Outlet />
//       </>
//     </TasksProvider>
//   );
// };

// export default MainPage;

// ДО РАБОТЫ С КОНТЕКСТОМ
// import { useCallback, useEffect, useState } from "react";
// import { fetchKanban } from "../services/api";
// import { Outlet } from "react-router-dom";
// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";

// // import PopUser from "../components/popups/PopUser/PopUser";
// // import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
// // import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

// const MainPage = ({ setIsAuth }) => {
//   const [loading, setLoading] = useState(false);
//   const [cardList, setCardList] = useState([]);
//   const [error, setError] = useState("");

//   const getCardList = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await fetchKanban({
//         token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
//       });
//       if (data) setCardList(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     getCardList();
//   }, [getCardList]);

//   return (
//     <>
//       <div className="wrapper">
//         {/* <PopUser /> */}
//         {/* <PopNewCard /> */}
//         {/* <PopBrowse /> */}

//         <Header setIsAuth={setIsAuth} />
//         <Main error={error} cardList={cardList} loading={loading} />
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default MainPage;

// ДО РАБОТЫ С API

// import { Outlet } from "react-router-dom";

// import Main from "../components/Main/Main";
// import Header from "../components/Header/Header";

// import PopUser from "../components/popups/PopUser/PopUser";
// import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
// // import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

// function MainPage({ loading, setIsAuth }) {
//   return (
//     <>
//       <div className="wrapper">
//         <PopUser />

//         <PopNewCard />

//         {/* <PopBrowse /> */}

//         <Header setIsAuth={setIsAuth} />

//         <Main loading={loading} />
//       </div>
//       <Outlet />
//     </>
//   );
// }

// export default MainPage;
