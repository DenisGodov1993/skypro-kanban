import Card from "../Card/Card";
import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const Column = ({ title }) => {
  const { tasks } = useContext(TasksContext);

  // Фильтруем задачи по статусу, нечувствительно к регистру и пробелам
  const filteredTasks = tasks.filter(
    (task) =>
      task.status?.trim().toLowerCase() === title?.trim().toLowerCase()
  );

  // Лог для проверки
  console.log("🟢 Column:", title, "Filtered tasks:", filteredTasks.length);

  return (
    <SMainColumn>
      <SColumnTitle>
        <p>{title}</p>
      </SColumnTitle>

      <SCards>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <Card key={task._id || task.id} data={task} />)
        ) : (
          <p style={{ color: "#999", fontStyle: "italic" }}>Нет задач</p>
        )}
      </SCards>
    </SMainColumn>
  );
};

export default Column;


// import { useContext } from "react";
// import Card from "../Card/Card";
// import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
// import { TasksContext } from "../../context/TasksContext";

// const Column = ({ title }) => {
//   // Получаем задачи из контекста
//   const { tasks } = useContext(TasksContext);

//   // Фильтруем по статусу колонки
//   // const filteredTasks = tasks.filter((task) => task.status === title);


//   const filteredTasks = tasks.filter(
//   (task) => task.status?.trim().toLowerCase() === title?.trim().toLowerCase()
// );
// console.log("Column:", title, "Filtered tasks:", filteredTasks.length);


//   return (
//     <SMainColumn>
//       <SColumnTitle>
//         <p>{title}</p>
//       </SColumnTitle>

//       <SCards>
        
//         {filteredTasks.map((task) => (
//           // <Card key={task._id || task.id} data={task} />
//           <Card key={id} data={task} />
          

//         ))}
//         console.log("Рендер карточки:", data.title);

//       </SCards>
//     </SMainColumn>
    
//   );
  
// };

// export default Column;


// import Card from "../Card/Card";
// import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
// import { useContext } from "react";
// import { TasksContext } from "../../context/TasksContext";

// const Column = ({ title }) => {
  
//   const { tasks } = useContext(TasksContext);

//   const filteredTasks = tasks.filter((task) => task.status === title);

//   return (
//     <SMainColumn>
//       <SColumnTitle>
//         <p>{title}</p>
//       </SColumnTitle>
    
//       <SCards>
//         {filteredTasks.map((task) => (
//           <Card key={task._id || task.id} data={task} />
//         ))}
//       </SCards>
//     </SMainColumn>
//   );
// };

// export default Column;



// import Card from "../Card/Card";
// import { cardList } from "../../data.js";
// import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";

// const Column = ({ title }) => {
//   return (
//     <SMainColumn>
//       <SColumnTitle>
//         <p>{title}</p>
//       </SColumnTitle>
//       <SCards>
//         {cardList
//           .filter((card) => card.status === title)
//           .map((card) => (
//             <Card key={card._id || card.id} data={card} />
//           ))}
//       </SCards>
//     </SMainColumn>
//   );
// };

// export default Column;

// ПЕРВОНАЧАЛЬНЫЙ КОД
// import Card from "../Card/Card";

// const Column = () => {
//   return (
//     <>
//       <div className="main__column column">
//         <div className="column__title">
//           <p>Без статуса</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Нужно сделать</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>В работе</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Тестирование</p>
//         </div>
//         <Card />
//       </div>
//       <div className="main__column">
//         <div className="column__title">
//           <p>Готово</p>
//         </div>
//         <Card />
//       </div>
//     </>
//   );
// };

// export default Column;
