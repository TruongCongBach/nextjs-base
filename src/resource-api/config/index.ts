import { AxiosRequestConfig } from 'axios'

type Config = {
  nextJSFetcher: AxiosRequestConfig
  serverSideFetcher: AxiosRequestConfig
};

export const config: Config = {
  nextJSFetcher: {
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    timeout: 10000,
  },
  serverSideFetcher: {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
  },

}