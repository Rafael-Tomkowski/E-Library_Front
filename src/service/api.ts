import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5190/api',
});

export { api }