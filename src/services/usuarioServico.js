import axios from "axios";

const baseURL = "http://localhost:3000";

export function chamarUsu() {
    const response = axios.get('${baseUrl}/Usuario')
    return response;
}