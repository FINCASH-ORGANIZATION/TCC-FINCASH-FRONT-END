import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function RegistrarUsu(data) {
  delete data.confirmarsenha;

  const body = {
    ...data,
  };

  const response = axios.post(`${baseURL}/Usuario`, body);
  return response;
}

// Primeira função, segue para a Home, mas não retorna o token
export function loginUsu(data) {
  const response = axios.post(`${baseURL}/auth/Login`, data);
  console.log(response.data);
  return response;
}

export async function UsuarioLogado() {
  try {
    const response = await axios.get(`${baseURL}/Usuario/pes/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar usuário logado:", error);
    throw error;
  }
}
