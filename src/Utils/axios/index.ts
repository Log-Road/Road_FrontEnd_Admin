import axios, { AxiosError } from "axios"
import { getToken, setToken } from "@/Utils/function/TokenManager";

const BASEURL = process.env.REACT_APP_BASE_URL
const TestToken = process.env.REACT_APP_Test_Token

export const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
});

export const refreshInstance = axios.create({
  baseURL: BASEURL,
  timeout: 10000
})

instance.interceptors.request.use(
  async function(config) {
    // const { accessToken } = getToken()
    const accessToken = TestToken

    if(accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`
    }
    return config
  },
  function (error: AxiosError) {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  async function(error: AxiosError) {
    if(axios.isAxiosError(error) && error.response) {
      const { status } = error.response
      
      if(status === 401) {
        const refreshToken = getToken().refreshToken
        try {
          await axios.get(`http://${BASEURL}/auth/refresh`,{
            headers: {
              "authorization": `Bearer ${refreshToken}`
            }
          })
          .then((response) => {
            const data = response.data
            setToken(data.access_token, data.refresh_token)
          })
          .catch(() => {
            //window.location.href = "login";
          })
        } catch(refreshError) {
          return Promise.reject(refreshError)
        }
      }
    }
    return Promise.reject(error)
  } 
)

export default instance;