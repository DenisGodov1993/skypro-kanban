import Column from "../Column/Column";
import {
  SLoading,
  SLoadingText,
  SMain,
  SContainer,
  SMainBlock,
  SMainContent,
} from "./Main.styled";

const Main = ({ loading }) => {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return loading ? (
    <SLoading>
      <SLoadingText>Данные загружаются . . . </SLoadingText>
    </SLoading>
  ) : (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {statuses.map((title) => (
              <Column key={title} loading={loading} title={title} />
            ))}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;

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
