// components/ChatApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Replace with your Django backend IP address
});

export default api;
