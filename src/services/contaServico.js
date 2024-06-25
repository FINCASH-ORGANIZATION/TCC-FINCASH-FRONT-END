import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message =
        error.response.data.message ||
        "Erro inesperado. Tente novamente mais tarde.";
      toast.error(message);
    } else if (error.request) {
      toast.error(
        "Erro na comunicação com o servidor. Tente novamente mais tarde."
      );
    } else {
      toast.error("Erro inesperado. Tente novamente mais tarde.");
    }
    return Promise.reject(error);
  }
);

export async function pesConta() {
  try {
    const response = await api.get("/conta/lista/", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar conta:", error);
    throw error;
  }
}

export async function criarConta(data) {
  try {
    const response = await api.post("/conta/", data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    throw error;
  }
}

export async function apagarConta(contaId) {
  try {
    const response = await api.delete(`/conta/${contaId}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar conta:", error);
    throw error;
  }
}

export default api;
