import axios, { AxiosError } from "axios"

const BASEURL = process.env.BASE_URL

export const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
});