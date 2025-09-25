import axios from "axios";

const BASE_URL = "https://wedev-api.sky.pro/api";

const API = (token) =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": "",
    },
  });

export default API;