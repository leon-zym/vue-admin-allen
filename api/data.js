import axios from './axios'

// data.js文件中集中写接口请求

export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param,
  })
}

export const getData = () => {
  return axios.request({
    // method默认为GET
    url: '/home/getData',
  })
}
