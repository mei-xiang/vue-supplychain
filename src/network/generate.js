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

// 获取供应商列表
export function getListSupplier() {
  return request({
    url: '/customer/front/all/listSupplier',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}

// 根据供应商id获取供应商信息
export function getSupplier(supplierId) {
  return request({
    url: '/customer/front/all/getSupplier',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid'),
      supplierId
    })
  })
}

// 根据供应商id获取商品列表
export function getListCommodity(supplierId) {
  return request({
    url: '/commodity/front/all/listCommodity',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid'),
      supplierId
    })
  })
}

// 根据商品名称获取商品信息
export function getCommodity(commodityId) {
  return request({
    url: 'commodity/front/all/getCommodity',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid'),
      commodityId
    })
  })
}
