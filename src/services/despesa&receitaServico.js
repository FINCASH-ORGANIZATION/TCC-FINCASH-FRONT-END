import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

// Função assíncrona para buscar despesas
export async function puxarDespesa() {
  try {
    console.log("Iniciando busca de despesas...");
    const response = await axios.get(`${baseURL}/despesa/lista`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log("Despesas encontradas:", response.data);
    return response.data; // Retorna apenas os dados da resposta, não o objeto de resposta completo
  } catch (error) {
    console.error("Erro ao buscar despesas:", error);
    throw error;
  }
}

export async function adicionarDespesa() {
  try {
    console.log("Iniciando busca de receitas...");
    const response = await axios.get(`${baseURL}/receita/lista`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log("Receitas encontradas:", response.data);
    return response.data; // Retorna apenas os dados da resposta, não o objeto de resposta completo
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

// Função assíncrona para buscar receitas
export async function puxarReceita() {
  try {
    console.log("Iniciando busca de receitas...");
    const response = await axios.get(`${baseURL}/receita/lista`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log("Receitas encontradas:", response.data);
    return response.data; // Retorna apenas os dados da resposta, não o objeto de resposta completo
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

export async function adicionarReceita() {
  try {
    console.log("Iniciando busca de receitas...");
    const response = await axios.get(`${baseURL}/receita/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    console.log("Receitas encontradas:", response.data);
    return response.data; // Retorna apenas os dados da resposta, não o objeto de resposta completo
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}
