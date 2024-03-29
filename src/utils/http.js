import axios from "axios";

const httpInstance = axios.create({
//   headers: {
//     "sec-fetch-site": "cross-site",
//     'Content-Type': 'application/json;charset=utf-8',
//     Authorization: "cdn.mdeer.com" //	可以是授权凭证用的参数值
//   },
  baseURL: "http://localhost:5173",
  timeout: 5000,
});

// 添加请求拦截器
httpInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default httpInstance;
