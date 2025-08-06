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




import Column from "../Column/Column";

const Main = ({ loading }) => {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return loading ? (
    <div className="loading">
      <p className="loading-text">Данные загружаются . . . </p>
    </div>
  ) : (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((title) => (
              <Column
                key={title}
                loading={loading}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;


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
