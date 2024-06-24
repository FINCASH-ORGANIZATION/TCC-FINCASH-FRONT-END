import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export async function pesConta() {
  try {
    const response = await axios.get(`${baseURL}/conta/lista/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar conta:", error);
  }
}

export async function apagarConta(contaId) {
    try {
      const response = await axios.delete(`${baseURL}/conta/${contaId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
      throw error; // Lança o erro para que quem chamou a função possa lidar com ele
    }
  }
  