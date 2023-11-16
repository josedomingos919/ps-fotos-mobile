import { axiosInstance } from "../../api/axios";

async function login(
  data = {
    username: "",
    password: "",
  }
) {
  try {
    const response = await axiosInstance.post("login", data);

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
