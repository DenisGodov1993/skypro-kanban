import { useContext, useState, useEffect } from "react";
import { fetchKanban } from "../services/api";
import { TasksContext } from "./TasksContext";
import { AuthContext } from "./AuthContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.token) return;

    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchKanban(user.token);
        if (data) setTasks(data);
      } catch (err) {
        setError(err.message);
        console.error("Ошибка загрузки задач:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user?.token]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
};


// import { useContext, useState, useEffect } from "react";
// import { fetchKanban } from "../services/api";
// import { TasksContext } from "./TasksContext";
// import { AuthContext } from "./AuthContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true); // true  false
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   // useEffect(() => {
//   //   const loadTasks = async () => {
//   //     setLoading(true);
//   //     try {
//   //       // const data = await fetchKanban({ token: user.token });
//   //       const data = await fetchKanban(user.token);

//   //       if (data) setTasks(data);
//   //     } catch (err) {
//   //       setError(err.message);
//   //       console.error("Ошибка загрузки слов", err.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   loadTasks();
//   // }, [user.token]);

//   useEffect(() => {
//   if (!user?.token) return;

//   const loadTasks = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchKanban(user.token);
//       if (data) setTasks(data);
//     } catch (err) {
//       setError(err.message);
//       console.error("Ошибка загрузки задач", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   loadTasks();
// }, [user?.token]);


//   return (
//     <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };


// import { useState, useEffect, useContext } from "react";
// import { getTasks } from "../services/api";
// import { AuthContext } from "./AuthContext";
// import { TasksContext } from "./TasksContext";

// export const TasksProvider = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!user?.token) {
//       console.warn("Нет токена, не загружаем задачи");
//       setLoading(false);
//       return;
//     }

//     const fetchTasks = async () => {
//       try {
//         const tasksFromApi = await getTasks(user.token);

//         setTasks(tasksFromApi);
//       } catch (err) {
//         console.error("Ошибка загрузки задач:", err);
//         setError("Ошибка загрузки задач");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [user]);

//   return (
//     <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { fetchKanban } from "../services/api";
// import { TasksContext } from "./TasksContext";
// import { AuthContext } from "./AuthContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!user?.token) return;
//       setLoading(true);
//       try {
//         const data = await fetchKanban({ token: user.token });
//         if (data) setTasks(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTasks();
//   }, [user?.token]);

//   return (
//     <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };

// import { useContext, useState, useEffect } from "react";
// import { fetchKanban } from "../services/api";
// import { TasksContext } from "./TasksContext";
// import { AuthContext } from "./AuthContext";

// export const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const loadTasks = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchKanban({ token: user.token });
//         // const data = await fetchKanban ();
//         if (data) setTasks(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Ошибка загрузки слов", err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTasks();
//   }, [user.token]);

//   return (
//     <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };
