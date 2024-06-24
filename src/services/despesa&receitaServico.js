import axios from "axios"; // Importação do axios para realizar requisições HTTP
import Cookies from "js-cookie"; // Importação do pacote para gerenciamento de cookies

const baseURL = "http://localhost:3000"; // URL base da API

// Função assíncrona para buscar despesas
export async function puxarDespesa() {
  try {
    const response = await axios.get(`${baseURL}/despesa/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`, // Passa o token de autorização via cabeçalho
      },
    });
    return response; // Retorna a resposta da requisição
  } catch (error) {
    console.error("Erro ao buscar despesas:", error); // Log de erro caso ocorra uma exceção
    throw error; // Lança o erro para ser tratado pela função chamadora
  }
}

// Função assíncrona para criar despesas
export async function criarDespesa() {
  try {
    const response = await axios.post(`${baseURL}/despesa/`, {
      // Não há dados a serem enviados no corpo da requisição neste exemplo
    });
    return response; // Retorna a resposta da requisição
  } catch (error) {
    console.error("Erro ao criar despesa:", error); // Log de erro caso ocorra uma exceção
    throw error; // Lança o erro para ser tratado pela função chamadora
  }
}

// Função assíncrona para buscar receitas
export async function puxarReceita() {
  try {
    const response = await axios.get(`${baseURL}/receita/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`, // Passa o token de autorização via cabeçalho
      },
    });
    return response; // Retorna a resposta da requisição
  } catch (error) {
    console.error("Erro ao buscar receitas:", error); // Log de erro caso ocorra uma exceção
    throw error; // Lança o erro para ser tratado pela função chamadora
  }
}

export async function criarReceitas() {
  try {
    const response = await axios.get(`${baseURL}/receita/lista`, {
      // Não há dados a serem enviados no corpo da requisição neste exemplo
    });
    return response; // Retorna a resposta da requisição
  } catch (error) {
    console.error("Erro ao chamar as receitas:", error); // Log de erro caso ocorra uma exceção
    throw error; // Lança o erro para ser tratado pela função chamadora
  }
}

// Função assíncrona para criar receitas
export async function criarReceita() {
  try {
    const response = await axios.post(`${baseURL}/receita/`, {
      // Não há dados a serem enviados no corpo da requisição neste exemplo
    });
    return response; // Retorna a resposta da requisição
  } catch (error) {
    console.error("Erro ao criar receita:", error); // Log de erro caso ocorra uma exceção
    throw error; // Lança o erro para ser tratado pela função chamadora
  }
}
