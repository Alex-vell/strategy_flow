/* eslint-disable */
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use((config: any) => {
  return config;
});
