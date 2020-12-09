import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface ApiResponse<T> {
  code: number;
  message: string;
  data?:T;
  timestamp?: number;
}

const config: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === "development"? process.env.VUE_APP_BASE_API: "/",
  timeout: 5000
}

const instance = axios.create(config)

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
})

instance.interceptors.response.use(({ data }: AxiosResponse) => {
  return data;
}, (error: AxiosError) => {
  return Promise.reject(error)
})

export default instance;