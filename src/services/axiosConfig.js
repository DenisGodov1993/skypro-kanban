import axios from "axios";

const API = (token) => {
  return axios.create({
    baseURL: "https://wedev-api.sky.pro/api",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export default API;


// import axios from "axios";

// const BASE_URL = "https://wedev-api.sky.pro/api";

// const API = (token) =>
//   axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }),
//     },
//   });

// export default API;

// // src/services/axiosConfig.js
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

// export default API;


// import axios from "axios";

// const BASE_URL = "https://wedev-api.sky.pro/api";

// const API = (token) =>
//   axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       "Content-Type": "",
//     },
//   });

// export default API; 


