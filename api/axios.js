import axios from 'axios'
import config from '@/config'

// 判断当前环境为开发环境还是生产环境，然后决定baseURL的值
const baseURL =
  process.env.NODE_ENV === 'development'
    ? config.baseURL.dev
    : config.baseURL.pro

// 封装一个工具类
class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      header: {},
    }
    return config
  }
  interceptor(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )
    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  // 后序需要接口请求的时候就调用request函数
  request(options) {
    // 创建axios实例
    const instance = axios.create()
    // 拼接配置对象
    options = { ...this.getInsideConfig(), ...options }
    // 给实例添加拦截器
    this.interceptor(instance)
    // 返回接口请求的响应数据
    return instance(options)
  }
}

// 将工具类暴露出去
export default new HttpRequest(baseURL)
