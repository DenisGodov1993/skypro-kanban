import Column from "../Column/Column";
import { SMain, SContainer, SMainBlock, SMainContent } from "./Main.styled";

const Main = () => {
  // Все статусы колонок
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {statuses.map((status) => (
              <Column key={status} title={status} />
            ))}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;


// import Column from "../Column/Column";
// import {
//   // SLoading,
//   // SLoadingText,
//   SMain,
//   SContainer,
//   SMainBlock,
//   SMainContent,
// } from "./Main.styled";
// // import { useContext } from "react";
// // import { TasksContext } from "../../context/TasksContext";
// // import { useState } from "react";

// const Main = () => {

//   // Статусы колонок
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

  


//   return (
//     <SMain>
//       <SContainer>
//         <SMainBlock>
//           <SMainContent>
//             {statuses.map((status) => (
//               <Column key={status} title={status} />
//             ))}
//           </SMainContent>
//         </SMainBlock>
//       </SContainer>

//     </SMain>
//   );
// };

// export default Main; 

// import Column from "../Column/Column";
// import {
//   // SLoading,
//   // SLoadingText,
//   SMain,
//   SContainer,
//   SMainBlock,
//   SMainContent,
// } from "./Main.styled";
// // import { useContext } from "react";
// // import { TasksContext } from "../../context/TasksContext";
// // import { useState } from "react";

// const Main = () => {
//   // const { tasks, loading, error } = useContext(TasksContext);

//   // Статусы колонок
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

  

//   // if (loading) {
//   //   return (
//   //     <SLoading>
//   //       <SLoadingText>Данные загружаются . . .</SLoadingText>
//   //     </SLoading>
//   //   );
//   // }

//   return (
//     <SMain>
//       <SContainer>
//         <SMainBlock>
//           <SMainContent>
//             {statuses.map((status) => (
//               <Column key={status} title={status} />
//             ))}
//           </SMainContent>
//         </SMainBlock>
//       </SContainer>
// {/* 
//       {error && (
//         <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
//           Ошибка: {error}
//         </p>
//       )} */}
//     </SMain>
//   );
// };

// export default Main;


// import Column from "../Column/Column";
// import {
//   SLoading,
//   SLoadingText,
//   SMain,
//   SContainer,
//   SMainBlock,
//   SMainContent,
// } from "./Main.styled";

// const Main = ({ loading, tasks, error }) => {
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

//   return loading ? (
//     <SLoading>
//       <SLoadingText>Данные загружаются . . . </SLoadingText>
//     </SLoading>
//   ) : (
//     <SMain>
//       <SContainer>
//         <SMainBlock>
//           <SMainContent>
//             {statuses.map((title) => (
//               <Column tasks={tasks} key={title} loading={loading} title={title} />
//             ))}
//           </SMainContent>
//         </SMainBlock>
//       </SContainer> 
//       <p>{error}</p>
//     </SMain>
//   );
// };

// export default Main; 


// import Column from "../Column/Column";
// import { SLoading, SLoadingText, SMain, SContainer, SMainBlock, SMainContent } from "./Main.styled";
// import { useContext } from "react";
// import { TasksContext } from "../../context/TasksContext";

// const Main = () => {
//   const { loading, error } = useContext(TasksContext);

//   const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

//   return loading ? (
//     <SLoading>
//       <SLoadingText>Данные загружаются . . . </SLoadingText>
//     </SLoading>
//   ) : (
//     <SMain>
//       <SContainer>
//         <SMainBlock>
//           <SMainContent>
//             {statuses.map((status) => (
//               <Column key={status} title={status} />
//             ))}
//           </SMainContent>
//         </SMainBlock>
//       </SContainer>
//       <p>{error}</p>
//     </SMain>
//   );
// };

// export default Main;




// import Column from "../Column/Column";

// const Main = ({ loading }) => {
//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

//   return (
//     <main className="main">
//       <div className="container">
//         <div className="main__block">
//           <div className="main__content">
//             {statuses.map((title) => (
//               <Column
//                 key={title}
//                 loading={loading}
//                 title={title}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Main;

// ПЕРВОНАЧАЛЬНЫЙ КОД
// import Column from "../Column/Column";

// const Main = () => {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="main__block">
//           <div className="main__content">
//             <Column />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Main;
