import axios from './axios'

// data.js文件中集中写接口请求

export const getToken = (params) => {
  return axios.request({
    url: '/permission/getToken',
    method: 'get',
    data: params,
  })
}

export const getData = () => {
  return axios.request({
    // method默认为GET
    url: '/home/getData',
  })
}

export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    method: 'get',
    params,
  })
}
