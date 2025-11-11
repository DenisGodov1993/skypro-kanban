import Card from "../Card/Card";
import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
import { useContext, useMemo } from "react";
import { TasksContext } from "../../context/TasksContext";

const Column = ({ title }) => {
  const { tasks } = useContext(TasksContext);

  // Фильтруем задачи по статусу
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === title),
    [tasks, title]
  );

  return (
    <SMainColumn>
      <SColumnTitle>
        <p>{title}</p>
      </SColumnTitle>

      <SCards>
        {filteredTasks.length === 0 ? (
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#94A6BE",
              textAlign: "center",
              padding: "50px",
            }}
          >
            Новых задач нет
          </p>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task._id || task.id} data={task} />
          ))
        )}
      </SCards>
    </SMainColumn>
  );
};

export default Column;

// рабочий
// import Card from "../Card/Card";
// import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
// import { useContext, useMemo } from "react";
// import { TasksContext } from "../../context/TasksContext";

// const Column = ({ title }) => {
//   const { tasks } = useContext(TasksContext);

//   // Фильтруем задачи по статусу
//   const filteredTasks = useMemo(
//     () => tasks.filter((task) => task.status === title),
//     [tasks, title]
//   );

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
// import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
// import { useContext, useMemo } from "react";
// import { TasksContext } from "../../context/TasksContext";
// import { Droppable } from "@hello-pangea/dnd";
// import styled from "styled-components";

// // Контур карточки
// const PlaceholderCard = styled.div`
//   width: 100%;
//   height: 130px; /* размер карточки */
//   border-radius: 6px;
//   border: 2px dashed #94a6be;
//   margin-bottom: 8px;
//   box-sizing: border-box;
// `;

// const Column = ({ title, draggingTaskId, sourceStatus }) => {
//   const { tasks } = useContext(TasksContext);

//   const filteredTasks = useMemo(
//     () => tasks.filter((task) => task.status === title),
//     [tasks, title]
//   );

//   return (
//     <SMainColumn>
//       <SColumnTitle>
//         <p>{title}</p>
//       </SColumnTitle>

//       <Droppable droppableId={title}>
//         {(provided) => (
//           <SCards
//             ref={provided.innerRef} // нужен только для Droppable
//             {...provided.droppableProps}
//             style={{
//               minHeight: "130px",
//               padding: "8px",
//               borderRadius: "8px",
//             }}
//           >
//             {/* Карточки */}
//             {filteredTasks.map((task, index) => (
//               <Card key={task._id || task.id} data={task} index={index} />
//             ))}

//             {/* Двойной placeholder для drag-and-drop */}
//             {draggingTaskId && filteredTasks.some(t => (t._id || t.id).toString() === draggingTaskId) && (
//               // Контур на старом месте
//               <PlaceholderCard style={{ marginBottom: '8px' }} />
//             )}
//             {draggingTaskId && title !== sourceStatus && (
//               // Контур внизу колонки, куда можно переместить
//               <PlaceholderCard />
//             )}

//             {provided.placeholder}
//           </SCards>
//         )}
//       </Droppable>
//     </SMainColumn>
//   );
// };

// export default Column;
