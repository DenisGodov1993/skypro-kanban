import { useState, useEffect, useContext } from "react";
import Column from "../Column/Column";
import { ThemeContext } from "../../context/ThemeContext";
import { TasksContext } from "../../context/TasksContext";
import { DragDropContext } from "@hello-pangea/dnd";
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
  const { theme } = useContext(ThemeContext);
  const { tasks, updateTask } = useContext(TasksContext);

  const [showLoader, setShowLoader] = useState(true);
  const [draggingTaskId, setDraggingTaskId] = useState(null);
  const [sourceStatus, setSourceStatus] = useState(null);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Начало перетаскивания
  const onDragStart = (start) => {
    const task = tasks.find(
      (t) => (t._id || t.id).toString() === start.draggableId.toString()
    );
    if (!task) return;
    setDraggingTaskId(start.draggableId);
    setSourceStatus(task.status);
  };

  // Завершение перетаскивания
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    setDraggingTaskId(null);
    setSourceStatus(null);

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const task = tasks.find(
      (t) => (t._id || t.id).toString() === draggableId.toString()
    );
    if (!task) return;

    const updatedTask = { ...task, status: destination.droppableId };
    await updateTask(draggableId, updatedTask);
  };

  // Если лоудер активен — показываем анимацию
  if (showLoader || loading) {
    return (
      <SLoading $themeMode={theme}>
        <SSpinner aria-hidden>
          <SRing className="ring ring--large" $themeMode={theme} />
          <SRing className="ring ring--medium" $themeMode={theme} />
          <SRing className="ring ring--small" $themeMode={theme} />
          <SDots>
            <SDot $themeMode={theme} style={{ "--i": 0 }} />
            <SDot $themeMode={theme} style={{ "--i": 1 }} />
            <SDot $themeMode={theme} style={{ "--i": 2 }} />
          </SDots>
        </SSpinner>

        <SLoadingText>Данные загружаются . . .</SLoadingText>
      </SLoading>
    );
  }
  // после загрузки
  return (
    <SMain $themeMode={theme}>
      <SContainer>
        <SMainBlock>
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <SMainContent>
              {statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  draggingTaskId={draggingTaskId}
                  sourceStatus={sourceStatus}
                />
              ))}
            </SMainContent>
          </DragDropContext>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
