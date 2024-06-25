import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export async function deletarCartao(cartaoId) {
  try {
    const response = await axios.delete(
      `${baseURL}/cartao/credito/${cartaoId}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar cartão:", error);
    throw error; // Lançando o erro novamente para ser tratado onde a função for chamada, se necessário
  }
}

export async function criarCartao(data) {
  try {
    const response = await axios.post(`${baseURL}/cartao/credito`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar cartão:", error);
    throw error; // Lançando o erro novamente para ser tratado onde a função for chamada, se necessário
  }
}

export async function pesCartao() {
  try {
    const response = await axios.get(`${baseURL}/cartao/credito`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cartão:", error);
  }
}
