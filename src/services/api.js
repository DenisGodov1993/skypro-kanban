import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban/";

// функция для ошибок
function handleApiError(error) {
  if (error.response) {
    throw new Error(error.response.data?.error || "Ошибка сервера");
  } else if (error.request) {
    throw new Error("Нет соединения с сервером. Попробуйте позже.");
  } else {
    throw new Error("Непредвиденная ошибка запроса.");
  }
}

// функция получения задач
export async function fetchKanban({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log("Полный ответ сервера:", data);
    return data.data.tasks;
  } catch (error) {
    // throw new Error(error.message);
    handleApiError(error);
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
    // throw new Error(error.message);
    handleApiError(error);
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
    // throw new Error(error.message);
    handleApiError(error);
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
    // throw new Error(error.message);
    handleApiError(error);
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
    // throw new Error(error.message);
    handleApiError(error);
  }
}

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
//     console.log("Полный ответ сервера:", data);
//     return data.data.tasks;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // функция создание задачи
// export async function postKanban({ token, task }) {
//   try {
//     const data = await axios.post(API_URL, task, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
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

// // функция для редактирования задачи
// export async function editTask({ token, id, task }) {
//   try {
//     const data = await axios.put(API_URL + id, task, {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "",
//       },
//     });
//     return data.data.tasks;
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
//     return data.data.tasks;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
