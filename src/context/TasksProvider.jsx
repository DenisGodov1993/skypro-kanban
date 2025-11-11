import { useContext, useState, useEffect } from "react";
import {
  fetchKanban,
  postKanban,
  getTask,
  editTask,
  deleteTask,
} from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false); // true или false
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // console.log("user:", user);
    if (!user?.token) return;

    // получение задач
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchKanban({ token: user?.token });

        // console.log("Ответ сервера (data):", data);
        setTasks(data || []);
      } catch (err) {
        console.error("Ошибка загрузки задач:", err);
        // setError(err.message);
        setError("Не удалось загрузить задачи. Попробуйте позже.");
        setTasks([]); // пустой массив, чтобы не ломало приложение
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [user?.token]);

  // создание задачи
  const createNewTask = async (task) => {
    try {
      const newTasks = await postKanban({ token: user.token, task }); // user?.token
      setTasks(newTasks);
    } catch (err) {
      console.error("Ошибка создания задачи:", err);
      setError(err.message);
    }
  };

  // получение одной задачи по id
  const getTaskById = async (id) => {
    try {
      const singleTask = await getTask({ token: user.token, id });
      return singleTask;
    } catch (err) {
      console.error("Ошибка получения задачи:", err);
      setError(err.message);
      return null;
    }
  };

  // редактирование
  const updateTask = async (id, task) => {
    try {
      const newTasks = await editTask({ token: user.token, id, task }); //user?.token
      setTasks(newTasks);
    } catch (err) {
      console.error("Ошибка редактирования задачи:", err);
      setError(err.message);
    }
  };

  // удаление
  const deleteTaskById = async (id) => {
    try {
      const updatedTasks = await deleteTask({ token: user.token, id }); //user?.token
      setTasks(updatedTasks);
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
      setError(err.message);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        error,
        createNewTask,
        getTaskById,
        updateTask,
        deleteTaskById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// import { useContext, useState, useEffect } from "react";
// import {
//   fetchKanban,
//   postKanban,
//   getTask,
//   editTask,
//   deleteTask,
// } from "../services/api";
// import { AuthContext } from "./AuthContext";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false); // true или false
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     // console.log("user:", user);
//     if (!user?.token) return;

//     // получение задач
//     const loadTasks = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchKanban({ token: user?.token });

//         // console.log("Ответ сервера (data):", data);
//         setTasks(data);
//       } catch (err) {
//         console.error("Ошибка загрузки задач:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTasks();
//   }, [user?.token]);

//   // создание задачи
//   const createNewTask = async (task) => {
//     try {
//       const newTasks = await postKanban({ token: user.token, task }); // user?.token
//       setTasks(newTasks);
//     } catch (err) {
//       console.error("Ошибка создания задачи:", err);
//       setError(err.message);
//     }
//   };

//   // получение одной задачи по id
//   const getTaskById = async (id) => {
//     try {
//       const singleTask = await getTask({ token: user.token, id });
//       return singleTask;
//     } catch (err) {
//       console.error("Ошибка получения задачи:", err);
//       setError(err.message);
//       return null;
//     }
//   };

//   // редактирование
//   const updateTask = async (id, task) => {
//     try {
//       const newTasks = await editTask({ token: user.token, id, task }); //user?.token
//       setTasks(newTasks);
//     } catch (err) {
//       console.error("Ошибка редактирования задачи:", err);
//       setError(err.message);
//     }
//   };

//   // удаление
//   const deleteTaskById = async (id) => {
//     try {
//       const updatedTasks = await deleteTask({ token: user.token, id }); //user?.token
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//       setError(err.message);
//     }
//   };

//   return (
//     <TasksContext.Provider
//       value={{
//         tasks,
//         loading,
//         error,
//         createNewTask,
//         getTaskById,
//         updateTask,
//         deleteTaskById,
//       }}
//     >
//       {children}
//     </TasksContext.Provider>
//   );
// };
