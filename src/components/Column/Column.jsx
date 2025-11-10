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
        {filteredTasks.map((task) => (
          <Card key={task._id || task.id} data={task} />
        ))}
      </SCards>
    </SMainColumn>
  );
};

export default Column;
