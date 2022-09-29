import axios, { AxiosInstance } from 'axios'
import { config } from '../config'
import { storageFC } from '../hooks/localStorage'

const serverSideFetcher:AxiosInstance = axios.create(config.serverSideFetcher)
serverSideFetcher.interceptors.request.use((axiosRequestConfig) => {
  const accessToken = storageFC.getItem('access_token');
  if (accessToken && axiosRequestConfig.headers) {
    axiosRequestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axiosRequestConfig;
}, (error) => Promise.reject(error));

serverSideFetcher.interceptors.response.use((axiosResponse) => {
  return axiosResponse.data;
}, (error) => {
  return Promise.reject(error);
});


export default serverSideFetcher;