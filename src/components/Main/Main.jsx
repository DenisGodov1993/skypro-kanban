import { useState, useEffect } from "react";
import Column from "../Column/Column";
import {
  SLoading,
  SLoadingText,
  SMain,
  SContainer,
  SMainBlock,
  SMainContent,
  SSpinner,
  SRing,
  SDots,
  SDot,
} from "./Main.styled";

const Main = ({ loading }) => {

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>  setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Если лоудер активен — показываем анимацию
  if (showLoader || loading) {
    return (
      <SLoading>
        <SSpinner aria-hidden>
          <SRing className="ring ring--large" />
          <SRing className="ring ring--medium" />
          <SRing className="ring ring--small" />
          <SDots>
            <SDot style={{ "--i": 0 }} />
            <SDot style={{ "--i": 1 }} />
            <SDot style={{ "--i": 2 }} />
          </SDots>
        </SSpinner>

        <SLoadingText>Данные загружаются . . .</SLoadingText>
      </SLoading>
    );
  }
  // Если загрузка закончилась
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
//   SLoading,
//   SLoadingText,
//   SMain,
//   SContainer,
//   SMainBlock,
//   SMainContent,
// } from "./Main.styled";

// const Main = ({ loading }) => {
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
//   SLoading,
//   SLoadingText,
//   SMain,
//   SContainer,
//   SMainBlock,
//   SMainContent } from "./Main.styled";

// const Main = ({ loading }) => {
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
//             {statuses.map((status) => (
//               <Column  loading={loading} key={status} title={status} />
//             ))}
//           </SMainContent>
//         </SMainBlock>
//       </SContainer>
//     </SMain>
//   );
// };

// export default Main;

// import Column from "../Column/Column";
// import { SMain, SContainer, SMainBlock, SMainContent } from "./Main.styled";

// const Main = () => {
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

// import { useContext, useState } from "react";
// import Column from "../Column/Column";
// import { SMain, SContainer, SMainBlock, SMainContent } from "./Main.styled";
// import { DragDropContext } from "@hello-pangea/dnd";
// import { TasksContext } from "../../context/TasksContext";

// const Main = () => {
//   const { tasks, updateTask } = useContext(TasksContext);
//   const [draggingTaskId, setDraggingTaskId] = useState(null);
//   const [sourceStatus, setSourceStatus] = useState(null);

//   const statuses = [
//     "Без статуса",
//     "Нужно сделать",
//     "В работе",
//     "Тестирование",
//     "Готово",
//   ];

//   const onDragStart = (start) => {
//     const task = tasks.find(
//       (t) => (t._id || t.id).toString() === start.draggableId.toString()
//     );
//     if (!task) return;
//     setDraggingTaskId(start.draggableId);
//     setSourceStatus(task.status);
//   };

//   const onDragEnd = async (result) => {
//     const { destination, source, draggableId } = result;
//     setDraggingTaskId(null);
//     setSourceStatus(null);

//     if (!destination) return;
//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     )
//       return;

//     const task = tasks.find(
//       (t) => (t._id || t.id).toString() === draggableId.toString()
//     );
//     if (!task) return;

//     const updatedTask = { ...task, status: destination.droppableId };
//     await updateTask(draggableId, updatedTask);
//   };

//   return (
//     <SMain>
//       <SContainer>
//         <SMainBlock>
//           <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
//             <SMainContent>
//               {statuses.map((status) => (
//                 <Column
//                   key={status}
//                   title={status}
//                   draggingTaskId={draggingTaskId}
//                   sourceStatus={sourceStatus}
//                 />
//               ))}
//             </SMainContent>
//           </DragDropContext>
//         </SMainBlock>
//       </SContainer>
//     </SMain>
//   );
// };

// export default Main;
