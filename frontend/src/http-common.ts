import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8000/';

axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  let token = localStorage.getItem('token');
  let headers: AxiosRequestHeaders = {
    ['Authorization']: `Bearer ${token}`,
    ['Accept']: 'application/json',
  }
  config.headers = headers;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosClient;
