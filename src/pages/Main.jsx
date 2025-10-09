import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { TasksContext } from "../context/TasksContext";

const MainPage = ({ setIsAuth }) => {
  const { tasks, loading, error } = useContext(TasksContext);

  return (
    <>
      <div className="wrapper">
        <Header setIsAuth={setIsAuth} />
        <Main error={error} tasks={tasks} loading={loading} />
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;



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
