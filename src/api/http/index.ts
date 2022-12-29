/* eslint-disable */
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.strategies.com/',
});

instance.interceptors.request.use((config: any) => {
  return config;
});
