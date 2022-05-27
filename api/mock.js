import Mock from 'mockjs'
import homeApi from './homeServeData/home'
import userApi from './homeServeData/user'
import permissionApi from './homeServeData/permission'

// 获取看板中Echarts的数据
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

// 对用户管理中的用户数据进行增删改查
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/user\/del/, 'post', userApi.deleteUser)

// 获取登录页的token
Mock.mock(/permission\/getToken/, 'get', permissionApi.getToken)
