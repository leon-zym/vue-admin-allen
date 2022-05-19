import Mock from 'mockjs'
import homeApi from './homeServeData/home'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)
