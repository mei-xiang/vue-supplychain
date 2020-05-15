import { request } from './request'
import Qs from 'qs'

// 获取产品业务类型列表
export function getBusinessType () {
  return request({
    url: '/product/front/all/getBusinessType',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}

// 根据产品类型id，获取产品列表
export function getListProduct (businessTypeId) {
  return request({
    url: '/product/front/all/listProduct',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid'),
      businessTypeId
    })
  })
}

// 获取产品详细信息
