import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export async function exibirSaldo() {
  try {
    console.log("Iniciando busca de saldo...");
    const response = await axios.get(`${baseURL}/saldo`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log("Saldo encontrado:", response);
    return response; // Retorna apenas os dados da resposta, não o objeto de resposta completo
  } catch (error) {
    console.error("Erro ao buscar saldo:", error);
    throw error;
  }
}
