// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4001",
  withCredentials: true, // keep this true if you're using auth/cookies
});

export default api;
