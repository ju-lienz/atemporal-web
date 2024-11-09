import axios from "axios";

export const ClienteAxios = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
    
})