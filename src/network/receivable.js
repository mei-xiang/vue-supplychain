import { request } from './request'
import Qs from 'qs'

// 获取产品业务类型列表
export function getProduct(productId) {
  return request({
    url: '/product/front/all/getProduct',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid'),
      productId
    })
  })
}
