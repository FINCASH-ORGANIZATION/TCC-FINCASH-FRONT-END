import axios from "axios";

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
export function login(data) {
  const response = axios.post(`${baseURL}/auth`, data);
  axios.post(`${baseURL}/auth`, data).then((response) => response.data);
  console.log(response.data);
  return response;
}

// Segunda função, NÃO segue para a Home, mas retorna o token
/* export function login(data) {
  const response = axios.post(`${baseURL}/auth`, data);
  axios.post(`${baseURL}/auth`, data).then((response) => {
    console.log(response.data);
    return response.data;
  });
};*/
