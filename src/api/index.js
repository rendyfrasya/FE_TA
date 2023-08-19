import axios from "axios";

const api = axios.create({
  baseURL: "http://monsys.cloud:3000/api/main",
});

export default api;
