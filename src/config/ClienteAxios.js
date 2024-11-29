import axios from "axios";

export const ClienteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});
