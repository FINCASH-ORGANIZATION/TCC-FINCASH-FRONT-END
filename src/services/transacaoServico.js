import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

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
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
  }
}

export async function CriarTransacaoUsuario(data) {
  try {
    const response = await axios.post(`${baseURL}/transacao/`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
  }
}
