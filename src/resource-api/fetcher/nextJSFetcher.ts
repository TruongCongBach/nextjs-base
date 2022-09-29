import axios, { AxiosInstance } from 'axios'
import { config } from '../config'

const nextJSFetcher:AxiosInstance  = axios.create(config.nextJSFetcher);
export default nextJSFetcher;