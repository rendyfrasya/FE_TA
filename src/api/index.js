import axios from "axios";

const api = axios.create({
  baseURL: "http://lilserv666.andresakti.xyz:3000/api/main",
});

export default api;
