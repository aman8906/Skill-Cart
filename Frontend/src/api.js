import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ .env should be correct
  withCredentials: true,
});

export default api;
