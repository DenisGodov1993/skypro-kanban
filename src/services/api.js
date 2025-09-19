import axios from "axios";
// import { cardList } from "../data";

const API_URL = "https://wedev-api.sky.pro/api/kanban/";
export async function fetchKanban({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.cardList;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postKanban({ token, cardList }) {
  try {
    const data = await axios.post(API_URL, cardList, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.cardList;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCardList({ token, id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.cardList;
  } catch (error) {
    throw new Error(error.message);
  }
}

// export async function editCardList({ token, id, cardList }) {
//     const data = await axios.put(API_URL + id, cardList, {
//       },
//     });
//     return data.data.cardList;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

export async function deleteCardList({ token, id }) {
  try {
    const data = await axios.delete(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text",
      },
    });
    return data.data.cardList;
  } catch (error) {
    throw new Error(error.message);
  }
}

