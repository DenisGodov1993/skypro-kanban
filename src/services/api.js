import API from "./axiosConfig";

// Получение всех задач
export async function fetchKanban() {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).get("/kanban");
    return data.cardList;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
  }
}

// Создание задачи
export async function postKanban(cardList) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).post("/kanban", cardList);
    return data.cardList;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка создания задачи");
  }
}

// Получение задачи по id
export async function getCardList(id) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).get(`/kanban/${id}`);
    return data.cardList;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка получения задачи");
  }
}

// Редактирование задачи
export async function editCardList(id, cardList) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).put(`/kanban/${id}`, cardList);
    return data.cardList;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка редактирования задачи");
  }
}

// Удаление задачи
export async function deleteCardList(id) {
  const token = localStorage.getItem("token");
  try {
    const { data } = await API(token).delete(`/kanban/${id}`);
    return data.cardList;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
  }
}



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
