import API from "./axiosConfig";

export async function signIn(userData) {
  try {
    const { data } = await API().post("/user/login", userData);
    return data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function signUp(userData) {
  try {
    const { data } = await API().post("/user", userData);
    return data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
} 



// первоначальный рабочий код

// import axios from "axios";

// const API_URL = "https://wedev-api.sky.pro/api/user";

// export async function signIn(userData) {
//    try {
//       const data = await axios.post(API_URL + "/login", userData, {
//          headers: {
//             "Content-Type": "",
//          },
//       });
//       return data.data.user;
//    } catch (error) {
//       throw new Error(error.response.data.error);
//    }
// }

// export async function signUp(userData) {
//    try {
//       const data = await axios.post(API_URL, userData, {
//          headers: {
//             "Content-Type": "",
//          },
//       });
//       return data.data.user;
//    } catch (error) {
//       throw new Error(error.response.data.error);
//    }
// }
