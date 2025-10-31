import { useContext, useState, useEffect } from "react";
import { fetchKanban, postKanban, getTask, editTask, deleteTask } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setTasks(data);
      } catch (err) {
        console.error("Ошибка загрузки задач:", err);
        setError(err.message);
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
      const updatedTasks = await deleteTask({ token: user.token, id });  //user?.token
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
//   // getTask,
//   postKanban,
//   editTask,
//   deleteTask,
// } from "../services/api";
// import { AuthContext } from "./AuthContext";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]); // состояние массива с задачами
//   const [loading, setLoading] = useState(false); // состояние загрузки
//   const [error, setError] = useState(""); // состояние текста ошибки
//   const { user } = useContext(AuthContext); //

//   // Загрузка задач при входе пользователя
//   useEffect(() => {
//     const loadTasks = async () => {
//       try {
//         const data = await fetchKanban();
//         setTasks(data);
//       } catch (error) {
//         console.error("Ошибка загрузки задач", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTasks();
//   }, [user.token]);

//   //  Создание задачи
//   const createNewTask = async ({ task }) => {
//     try {
//       const newTasks = await postKanban({ token: user?.token, task });
//       setTasks(newTasks);
//     } catch (error) {
//       console.error("Ошибка создания задачи", error);
//       setError(error.message);
//     }
//   };

//   // Редактирование задачи
//   const updateTask = async ({ task, id }) => {

//     try {
//       const newTasks = await editTask({ token: user?.token, id, task });
//       setTasks(newTasks);
//     } catch (error) {
//       console.error("Ошибка редактирования задачи", error);
//       setError(error.message);
//     }
//   };

//   // Удаление задачи
//   const deleteTaskById = async (id) => {
//     if (!user?.token) return;

//     try {
//       const updatedTasks = await deleteTask(user.token, id);
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//       setError(err.message);
//     }
//   };

//   // // Получение задачи по ID
//   // const getTaskById = async (id) => {
//   //   if (!user?.token) return null;

//   //   try {
//   //     return await getTask(user.token, id);
//   //   } catch (err) {
//   //     console.error("Ошибка получения задачи:", err);
//   //     setError(err.message);
//   //     return null;
//   //   }
//   // };

//   return (
//     <TasksContext.Provider
//       value={{
//         tasks,
//         setTasks,
//         loading,
//         error,
//         createNewTask,
//         updateTask,
//         deleteTaskById,
//         // getTaskById,
//       }}
//     >
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import {
//   fetchKanban,
//   getTask,
//   postKanban,
//   editTask,
//   deleteTask,
// } from "../services/api";
// import { AuthContext } from "./AuthContext";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   // Загрузка задач при входе пользователя
//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!user?.token) return;
//       setLoading(true);
//       setError("");

//       try {
//         const data = await fetchKanban(user.token);
//         if (Array.isArray(data)) setTasks(data);
//       } catch (err) {
//         console.error("Ошибка загрузки задач:", err);
//         setError(err.message || "Ошибка при загрузке задач");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTasks();
//   }, [user?.token]);

//   // 🆕 Создание задачи
//   const createNewTask = async (taskData) => {
//     if (!user?.token) return;

//     try {
//       const updatedTasks = await postKanban(user.token, taskData);
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка создания задачи:", err);
//       setError(err.message);
//     }
//   };

//   // ✏️ Редактирование задачи
//   const updateTask = async (id, updatedTask) => {
//     if (!user?.token) return;

//     try {
//       const updatedTasks = await editTask(user.token, id, updatedTask);
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка редактирования задачи:", err);
//       setError(err.message);
//     }
//   };

//   // 🗑️ Удаление задачи
//   const deleteTaskById = async (id) => {
//     if (!user?.token) return;

//     try {
//       const updatedTasks = await deleteTask(user.token, id);
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//       setError(err.message);
//     }
//   };

//   // 🔍 Получение задачи по ID
//   const getTaskById = async (id) => {
//     if (!user?.token) return null;

//     try {
//       return await getTask(user.token, id);
//     } catch (err) {
//       console.error("Ошибка получения задачи:", err);
//       setError(err.message);
//       return null;
//     }
//   };

//   return (
//     <TasksContext.Provider
//       value={{
//         tasks,
//         setTasks,
//         loading,
//         error,
//         createNewTask,
//         updateTask,
//         deleteTaskById,
//         getTaskById,
//       }}
//     >
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import { fetchKanban, postKanban, editTask, deleteTask } from "../services/api";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Получение всех задач
//   const loadTasks = async () => {
//     if (!user?.token) return;
//     setLoading(true);
//     try {
//       const data = await fetchKanban(user.token);
//       setTasks(data);
//     } catch (err) {
//       console.error("Ошибка загрузки задач:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Создание новой задачи
//   const createNewTask = async (taskData) => {
//     if (!user?.token) return;
//     setLoading(true);
//     try {
//       const data = await postKanban(taskData, user.token);
//       setTasks(data);
//       return data;
//     } catch (err) {
//       console.error("Ошибка создания задачи:", err);
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Редактирование задачи
//   const updateTask = async (id, updatedTask) => {
//     if (!user?.token) return;
//     setLoading(true);
//     try {
//       const data = await editTask(id, updatedTask, user.token);
//       setTasks(data);
//       return data;
//     } catch (err) {
//       console.error("Ошибка редактирования задачи:", err);
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Удаление задачи
//   const deleteTaskById = async (id) => {
//     if (!user?.token) return;
//     setLoading(true);
//     try {
//       const data = await deleteTask(id, user.token);
//       setTasks(data);
//       return data;
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadTasks();
//   }, [user?.token]);

//   return (
//     <TasksContext.Provider
//       value={{
//         tasks,
//         loading,
//         error,
//         loadTasks,
//         createNewTask,
//         updateTask,
//         deleteTaskById,
//       }}
//     >
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { fetchKanban, getTask, postKanban, editTask, deleteTask } from "../services/api";
// import { AuthContext } from "./AuthContext";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!user?.token) return;
//       setLoading(true);
//       try {
//         const data = await fetchKanban({ token: user.token });
//         setTasks(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Ошибка загрузки задач:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTasks();
//   }, [user?.token]);

//   const createNewTask = async (task) => {
//     if (!user?.token) return;
//     try {
//       const updatedTasks = await postKanban({ token: user.token, newTask: task });
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка добавления задачи:", err);
//     }
//   };

//   const getTaskById = async (id) => {
//     if (!user?.token) return null;
//     try {
//       return await getTask({ token: user.token, id });
//     } catch (err) {
//       console.error("Ошибка получения задачи:", err);
//       return null;
//     }
//   };

//   const updateTask = async (id, task) => {
//     if (!user?.token) return;
//     try {
//       const updatedTasks = await editTask({ token: user.token, id, updatedTask: task });
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка редактирования задачи:", err);
//     }
//   };

//   const deleteTaskById = async (id) => {
//     if (!user?.token) return;
//     try {
//       const updatedTasks = await deleteTask({ token: user.token, id });
//       setTasks(updatedTasks);
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//     }
//   };

//   return (
//     <TasksContext.Provider value={{
//       tasks,
//       setTasks,
//       loading,
//       error,
//       createNewTask,
//       updateTask,
//       deleteTaskById,
//       getTaskById
//     }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { fetchKanban, getTask, postKanban, editTask, deleteTask } from "../services/api";
// import { AuthContext } from "./AuthContext";
// // import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   // Загрузка всех задач
//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!user?.token) return;
//       setLoading(true);
//       try {
//         const data = await fetchKanban(user.token);
//         if (data) setTasks(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Ошибка загрузки задач:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTasks();
//   }, [user?.token]);

//   // Создание новой задачи
//   const createNewTask = async (task) => {
//     if (!user?.token) return;
//     try {
//       const newTasks = await postKanban(task, user.token);
//       setTasks(newTasks);
//     } catch (err) {
//       console.error("Ошибка добавления задачи:", err);
//     }
//   };

//   // Получение одной задачи по ID (возвращает объект задачи)
//   const getTaskById = async (id) => {
//     if (!user?.token) return null;
//     try {
//       const task = await getTask(id, user.token);
//       return task;
//     } catch (err) {
//       console.error("Ошибка получения задачи:", err);
//       return null;
//     }
//   };

//   // Редактирование задачи
//   const updateTask = async (id, task) => {
//     if (!user?.token) return;
//     try {
//       const newTasks = await editTask(id, task, user.token);
//       setTasks(newTasks);
//     } catch (err) {
//       console.error("Ошибка редактирования задачи:", err);
//     }
//   };

//   // Удаление задачи
//   const deleteTaskById = async (id) => {
//     if (!user?.token) return;
//     try {
//       const newTasks = await deleteTask(id, user.token);
//       setTasks(newTasks);
//     } catch (err) {
//       console.error("Ошибка удаления задачи:", err);
//     }
//   };

//   return (
//     <TasksContext.Provider value={{
//       tasks,
//       setTasks,
//       loading,
//       error,
//       createNewTask,
//       updateTask,
//       deleteTaskById,
//       getTaskById
//     }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { fetchKanban, postKanban, getTask, editTask, deleteTask } from "../services/api";
// import { AuthContext } from "./AuthContext";
// // import { TasksContext } from "./TasksContext";

// export const WordsProvider = ({ children }) => {
//    const [words, setWords] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [error, setError] = useState("");
//    const { user } = useContext(AuthContext);

//    useEffect(() => {
//       const loadWords = async () => {
//          try {
//             const data = await fetchWords();
//             setWords(data);
//          } catch (error) {
//             console.error("Ошибка загрузки слов", error);
//          }
//       };
//       loadWords();
//    }, []);

// // export const TasksProvider = ({ children }) => {
// //   const [tasks, setTasks] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const { user } = useContext(AuthContext);

// //   // Загрузка всех задач
// //   useEffect(() => {
// //     const loadTasks = async () => {
// //       if (!user?.token) return;
// //       setLoading(true);
// //       try {
// //         const data = await fetchKanban(user.token);
// //         if (data) setTasks(data);
// //       } catch (err) {
// //         setError(err.message);
// //         console.error("Ошибка загрузки задач:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     loadTasks();
// //   }, [user?.token]);

//    const addNewWord = async ({ word }) => {
//       try {
//          const newWords = await postWord({ token: user?.token, word });
//          setWords(newWords);
//       } catch (error) {
//          console.error("Ошибка добавления слова", error);
//       }
//    };

//    const updateWord = async ({ word, id }) => {
//       try {
//          const newWords = await editWord({ token: user?.token, id, word });
//          setWords(newWords);
//       } catch (error) {
//          console.error("Ошибка редактирования слова", error);
//    }
//    };

//    return (
//       <WordsContext.Provider value={{ words, setWords, loading, error }}>
//          {children}
//       </WordsContext.Provider>
//    );
// };
