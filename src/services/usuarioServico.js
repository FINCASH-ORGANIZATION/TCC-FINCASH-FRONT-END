import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function RegistrarUsu(data) {
  delete data.confirmarsenha;

  const body = {
    ...data,
    avatar: "https://pbs.twimg.com/media/ClhB3oZVAAAF6Hh.jpg:large",
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

export async function esqueceuSenhaRedefinir(data) {
  try {
    const response = axios.post(`${baseURL}/senha/redefinir`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao resetar a senha:", error);
    throw error;
  }
}

export async function esqueceuSenhaAtualizar(requestData) {
  try {
    const response = await axios.post(
      `${baseURL}/senha/atualizar`,
      requestData
    );
    return response.requestData;
  } catch (error) {
    console.error("Erro ao resetar a senha:", error);
    throw error;
  }
}

export async function pesqDescricaoTransacao(data) {
  try {
    const response = await axios.get(`${baseURL}/transacao/pesquisarId/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      params: data,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
  }
}

export async function puxarTransacaoUsuario() {
  try {
    const response = await axios.get(`${baseURL}/transacao/pesUsuarioRota/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
  }
}
