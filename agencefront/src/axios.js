// axios.js
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

axios.interceptors.request.use(
  config => {
    // Optionally add auth headers
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // Handle responses
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default axios;
