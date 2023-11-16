import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.18.6:3333/",
  headers: {
    "Content-Type": "application/json",
  },
});
