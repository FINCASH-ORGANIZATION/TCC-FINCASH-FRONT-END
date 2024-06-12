import axios from "axios";

const baseURL = "http://localhost:3000";

export function CriarUsu(data) {
    delete data.confirmarsenha;

    const body = {
        ...data
    };

    const response = axios.post(`${baseURL}/Usuario`, body);
    return response;
}