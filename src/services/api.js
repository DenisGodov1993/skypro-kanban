import API from "./axiosConfig";

// Получение всех задач
export async function fetchKanban(token) {
  // const token = localStorage.getItem("token");
 

  try {
    const { data } = await API(token).get("/kanban");
    console.log("Ответ от API:", data);
    return data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
  }
  
}



// export async function fetchKanban(token) {
//   try {
//     const { data } = await API(token).get("/kanban");
//     return data.tasks;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
//   }
// }

// Создание задачи
export async function postKanban(taskData) {
  // const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).post("/kanban", taskData);
    return data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка создания задачи");
  }
}


// Получение задачи по id
export async function getTask(id) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).get(`/kanban/${id}`);
    return data.task;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка получения задачи");
  }
}

// Редактирование задачи
export async function editTask(id, updatedTask) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).put(`/kanban/${id}`, updatedTask);
    return data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
  }
}

// Удаление задачи
export async function deleteTask(id) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).delete(`/kanban/${id}`);
    return data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
  }
}




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
