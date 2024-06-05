import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:3004";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      // 请求已发出,但服务器响应的状态码不在 2xx 范围内
      toast.error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      // 请求已发出,但没有收到响应
      toast.error("No response from server");
    } else {
      // 出现了其他错误
      toast.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const getUsers = () => api.get("/users");
