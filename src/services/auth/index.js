import { axiosInstance } from "../../api/axios";

async function login({ nome, password }) {
  try {
    const response = await axiosInstance.post("utilizador/login", {
      nome,
      password,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function register({ nome, password, sessionId }) {
  try {
    const response = await axiosInstance.post("utilizador", {
      nome,
      password,
      sessionId,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const auth = { login, register };
