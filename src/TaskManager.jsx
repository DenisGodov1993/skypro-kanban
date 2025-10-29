// import { useContext } from "react";
// import { TasksContext } from "../context/TasksContext";

// const TaskManager = () => {
//   const { tasks, createNewTask, loading, error } = useContext(TasksContext);

//   const handleAddTask = async () => {
//     try {
//       await createNewTask({
//         title: "Тестовая задача",
//         topic: "Research",
//         status: "Без статуса",
//         description: "Это тестовая задача, созданная для текущего пользователя",
//         date: new Date().toISOString(),
//       });
//       console.log("Задача создана!");
//     } catch (err) {
//       console.error("Ошибка при создании задачи:", err);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleAddTask} disabled={loading}>
//         {loading ? "Создаём задачу..." : "Добавить задачу"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <h2>Список задач:</h2>
//       {tasks.length === 0 ? (
//         <p>Задач пока нет</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => (
//             <li key={task._id}>
//               <strong>{task.title}</strong> — {task.description} | {task.status}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskManager;