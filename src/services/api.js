import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// функция получения задач
export async function fetchKanban({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log("Полный ответ сервера:", data);
    return data.data.tasks;

  } catch (error) {
    throw new Error(error.message);
  }
}

// функция создание задачи
export async function postKanban({ token, task }) {
  try {
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

// функция получения одной задачи по id
export async function getTask({ token, id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

// функция для редактирования задачи
export async function editTask({ token, id, task }) {
  try {
    const data = await axios.put(API_URL + id, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

// функция для удаления задачи
export async function deleteTask({ token, id }) {
  try {
    const data = await axios.delete(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}


// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban";

// // 📋 Получить список задач
// export async function fetchKanban(token) {
//   try {
//     const { data } = await axios.get(API_URL, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // 📋 Получить задачу по ID
// export async function getTask(token, id) {
//   try {
//     const { data } = await axios.get(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // 🆕 Создать задачу
// export async function postKanban(token, newTask) {
//   try {
//     const { data } = await axios.post(API_URL, newTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // ✅ по твоему требованию
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // ✏️ Изменить задачу
// export async function editTask(token, id, updatedTask) {
//   try {
//     const { data } = await axios.put(`${API_URL}/${id}`, updatedTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // 🗑️ Удалить задачу
// export async function deleteTask(token, id) {
//   try {
//     const { data } = await axios.delete(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }


// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban";

// // 📋 Получить список задач
// export async function fetchKanban(token) {
//   try {
//     const { data } = await axios.get(API_URL, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // 📋 Получить задачу по ID
// export async function getTask(token, id) {
//   try {
//     const { data } = await axios.get(`${API_URL}/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // 🆕 Создать задачу
// export async function postKanban(token, newTask) {
//   try {
//     const { data } = await axios.post(API_URL, newTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // ✅ как ты просил
//       },
//     });
//     return data.tasks; // API возвращает обновлённый список
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // ✏️ Изменить задачу
// export async function editTask(token, id, updatedTask) {
//   try {
//     const { data } = await axios.put(`${API_URL}/${id}`, updatedTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // ✅ пустой Content-Type
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // 🗑️ Удалить задачу
// export async function deleteTask(token, id) {
//   try {
//     const { data } = await axios.delete(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // ✅ пустой Content-Type
//       },
//     });
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }


// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban";

// // Получение всех задач
// export async function fetchKanban(token) {
//   try {
//     const { data } = await axios.get(API_URL, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // пустой
//       },
//     });
//     return data.tasks;
//   } catch (err) {
//     throw new Error(err.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData, token) {
//   try {
//     const { data } = await axios.post(API_URL, taskData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // пустой
//       },
//     });
//     return data.tasks; // API возвращает обновленный список задач
//   } catch (err) {
//     throw new Error(err.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по ID
// export async function getTask(id, token) {
//   try {
//     const { data } = await axios.get(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.task;
//   } catch (err) {
//     throw new Error(err.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask, token) {
//   try {
//     const { data } = await axios.put(`${API_URL}/${id}`, updatedTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks; // возвращает обновленный список
//   } catch (err) {
//     throw new Error(err.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id, token) {
//   try {
//     const { data } = await axios.delete(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks; // возвращает обновленный список
//   } catch (err) {
//     throw new Error(err.response?.data?.error || "Ошибка удаления задачи");
//   }
// }


// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// // Получить все задачи
// export async function fetchKanban({ token }) {
//   try {
//     const { data } = await axios.get(API_URL, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return data.tasks; // возвращаем массив задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }

// // Получить одну задачу
// export async function getTask({ token, id }) {
//   try {
//     const { data } = await axios.get(`${API_URL}${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return data.task; // объект задачи
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }

// // Создать задачу
// export async function postKanban({ token, newTask }) {
//   try {
//     const { data } = await axios.post(API_URL, newTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "", // оставляем пустым по твоему требованию
//       },
//     });
//     return data.tasks; // возвращаем обновленный список задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }

// // Редактировать задачу
// export async function editTask({ token, id, updatedTask }) {
//   try {
//     const { data } = await axios.put(`${API_URL}${id}`, updatedTask, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks; // обновлённый список задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }

// // Удалить задачу
// export async function deleteTask({ token, id }) {
//   try {
//     const { data } = await axios.delete(`${API_URL}${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     return data.tasks; // обновлённый список задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }


// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// // функция получения задач
// export async function fetchKanban({ token }) {
//   try {
//     const data = await axios.get(API_URL, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.tasks;

//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция получения одной задачи по id
// export async function getTask({ token, id }) {
//   try {
//     const data = await axios.get(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.task;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция создание задачи
// export async function postKanban({ token, newTask }) {
//   try {
//     const data = await axios.post(API_URL, newTask, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.newTask;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция для редактирования задачи
// export async function editTask({ token, id, updatedTask }) {
//   try {
//     const data = await axios.put(API_URL + id, updatedTask, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.updatedTask;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция для удаления задачи
// export async function deleteTask({ token, id }) {
//   try {
//     const data = await axios.delete(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.id;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }


// // первоначальный рабочий код
// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// // функция получения задач
// export async function fetchKanban({ token }) {
//   try {
//     const data = await axios.get(API_URL, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.tasks;

//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // // Получение всех задач
// // export async function fetchKanban() {
// //   try {
// //     const { data } = await API.get("/tasks");
// //     return data.tasks;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
// //   }
// // }

// // функция получения одной задачи по id
// export async function getTask({ token, id }) {
//   try {
//     const data = await axios.get(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.task;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // // Получение задачи по id
// // export async function getTask(id) {
// //   try {
// //     const { data } = await API.get(`/tasks/${id}`);
// //     return data.task;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
// //   }
// // }

// // функция создание задачи
// export async function postKanban({ token, newTask }) {
//   try {
//     const data = await axios.post(API_URL, newTask, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.newTask;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // // Создание задачи
// // export async function postKanban(taskData) {
// //   try {
// //     const { data } = await API.post("/tasks", JSON.stringify(taskData)); // 🔹 сериализация вручную
// //     return data.task;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
// //   }
// // }

// // функция для редактирования задачи
// export async function editTask({ token, id, updatedTask }) {
//   try {
//     const data = await axios.put(API_URL + id, updatedTask, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.updatedTask;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // // Редактирование задачи
// // export async function editTask(id, updatedTask) {
// //   try {
// //     const { data } = await API.put(`/tasks/${id}`, JSON.stringify(updatedTask)); // 🔹 сериализация вручную
// //     return data.task;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
// //   }
// // }

// // функция для удаления задачи
// export async function deleteTask({ token, id }) {
//   try {
//     const data = await axios.delete(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.id;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }














// // Удаление задачи
// export async function deleteTask(id) {
//   try {
//     const { data } = await API.delete(`/tasks/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }


// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban() {
//   try {
//     const { data } = await API.get("/tasks");
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData) {
//   try {
//     const { data } = await API.post("/tasks", JSON.stringify(taskData)); // 🔹 сериализация вручную
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id) {
//   try {
//     const { data } = await API.get(`/tasks/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask) {
//   try {
//     const { data } = await API.put(`/tasks/${id}`, JSON.stringify(updatedTask)); // 🔹 сериализация вручную
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id) {
//   try {
//     const { data } = await API.delete(`/tasks/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }


// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban() {
//   try {
//     const { data } = await API.get("/tasks");
//     console.log("Ответ от API:", data);
//     return data.tasks;
//   } catch (error) {
//     console.error("Ошибка при загрузке задач:", error);
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData) {
//   try {
//     const { data } = await API.post("/tasks", taskData);
//     return data.task;
//   } catch (error) {
//     console.error("Ошибка при создании задачи:", error);
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id) {
//   try {
//     const { data } = await API.get(`/tasks/${id}`);
//     return data.task;
//   } catch (error) {
//     console.error("Ошибка при получении задачи:", error);
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask) {
//   try {
//     const { data } = await API.put(`/tasks/${id}`, updatedTask);
//     return data.task;
//   } catch (error) {
//     console.error("Ошибка при редактировании задачи:", error);
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id) {
//   try {
//     const { data } = await API.delete(`/tasks/${id}`);
//     return data.task;
//   } catch (error) {
//     console.error("Ошибка при удалении задачи:", error);
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }



// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban(token) {
//   try {
//     const { data } = await API(token).get("/kanban");
//     console.log("Ответ от API:", data);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData, token) {
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id, token) {
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask, token) {
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, updatedTask);
//     return data.task;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.error || "Ошибка редактирования задачи"
//     );
//   }
// }

// // Удаление задачи
// export async function deleteTask(id, token) {
//   try {
//     const { data } = await API(token).delete(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }

// import axios from "axios";

// const BASE_URL = "https://wedev-api.sky.pro/api";

// const API = (token) =>
//   axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       "Content-Type": "application/json",
//     },
//   });

// // Получение всех задач
// export async function fetchKanban(token) {
//   try {
//     const { data } = await API(token).get("/kanban");
//     return data.tasks || [];
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData, token) {
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.task; // Возвращаем только новую задачу
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id, token) {
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask, token) {
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, updatedTask);
//     return data.task; // Возвращаем обновлённую задачу
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id, token) {
//   try {
//     await API(token).delete(`/kanban/${id}`);
//     return id; // Возвращаем id удалённой задачи
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }




// api.js
// import axios from "axios";

// const BASE_URL = "https://wedev-api.sky.pro/api";

// // создаём инстанс axios с токеном
// const API = (token) =>
//   axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       "Content-Type": "text/html",
//     },
//   });


// import API from "./axiosConfig";
// // Получение всех задач
// export const fetchKanban = async (token) => {
//   try {
//     const { data } = await API(token).get("/kanban");
//     return data.tasks; // массив задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// };

// // Создание задачи
// export const postKanban = async (taskData, token) => {
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.tasks; // обновлённый массив задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// };

// // Получение одной задачи по ID
// export const getTaskById = async (id, token) => {
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task; // одна задача
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// };

// // Редактирование задачи
// export const editTask = async (id, updatedTask, token) => {
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, updatedTask);
//     return data.tasks; // обновлённый массив задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// };

// // Удаление задачи
// export const deleteTask = async (id, token) => {
//   try {
//     const { data } = await API(token).delete(`/kanban/${id}`);
//     return data.tasks; // обновлённый массив задач
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// };





// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban(token) {
//   // const token = localStorage.getItem("token");

//   try {
//     const { data } = await API(token).get("/kanban");
//     console.log("Ответ от API:", data);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }

// }

// // export async function fetchKanban(token) {
// //   try {
// //     const { data } = await API(token).get("/kanban");
// //     return data.tasks;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
// //   }
// // }

// // Создание задачи
// export async function postKanban(taskData) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, updatedTask) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, updatedTask);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).delete(`/kanban/${id}`);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }

// // src/services/api.js
// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban() {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).get("/kanban");
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Получение задачи по ID
// export async function getTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, taskData) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, taskData);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).delete(`/kanban/${id}`);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }

// import API from "./axiosConfig";

// // Получение всех задач
// export async function fetchKanban() {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).get("/kanban");
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// // Создание задачи
// export async function postKanban(taskData) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).post("/kanban", taskData);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка создания задачи");
//   }
// }

// // Получение задачи по id
// export async function getTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).get(`/kanban/${id}`);
//     return data.task;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка получения задачи");
//   }
// }

// // Редактирование задачи
// export async function editTask(id, taskData) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).put(`/kanban/${id}`, taskData);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
//   }
// }

// // Удаление задачи
// export async function deleteTask(id) {
//   const token = localStorage.getItem("token");
//   try {
//     const { data } = await API(token).delete(`/kanban/${id}`);
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
//   }
// }

// первоначальный рабочий код
// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// // функция получения задач
// export async function fetchKanban({ token }) {
//   try {
//     const data = await axios.get(API_URL, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.cardList;

//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция создание задачи
// export async function postKanban({ token, cardList }) {
//   try {
//     const data = await axios.post(API_URL, cardList, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.cardList;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция получения одной задачи по id
// export async function getCardList({ token, id }) {
//   try {
//     const data = await axios.get(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return data.data.cardList;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция для редактирования задачи
// export async function editCardList({ token, id, cardList }) {
//   try {
//     const data = await axios.put(API_URL + id, cardList, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.cardList;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция для удаления задачи
// export async function deleteCardList({ token, id }) {
//   try {
//     const data = await axios.delete(API_URL + id, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.cardList;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
