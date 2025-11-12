import Card from "../Card/Card";
import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
import { useContext, useMemo } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";

// Контур карточки при перетаскивании
const PlaceholderCard = styled.div`
  width: 100%;
  height: 130px; /* размер карточки */
  border-radius: 6px;
  border: 2px dashed #94a6be;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const Column = ({ title, draggingTaskId, sourceStatus }) => {
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

      <Droppable droppableId={title}>
        {(provided) => (
          <SCards
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              minHeight: "130px",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            {/* Карточки задач */}
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
              filteredTasks.map((task, index) => (
                <Card
                  key={task._id || task.id}
                  data={task}
                  index={index} // обязательно для Draggable
                />
              ))
            )}
            {/* Отображение контура при перетаскивании */}
            {draggingTaskId &&
              filteredTasks.some(
                (t) => (t._id || t.id).toString() === draggingTaskId
              ) && <PlaceholderCard style={{ marginBottom: "8px" }} />}

            {draggingTaskId && title !== sourceStatus && <PlaceholderCard />}

            {provided.placeholder}
          </SCards>
        )}
      </Droppable>
    </SMainColumn>
  );
};

export default Column;
