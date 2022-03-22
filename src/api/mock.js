import Mock from 'mockjs'
import imageApi from './mockServeData/image'

Mock.mock(/\/image\/getImage/, 'get', imageApi.getImage)
