import { request } from 'network/request'
import Qs from 'qs'

export function companyDetails() {
  return request({
    method: 'post',
    url: '/customer/front/all/companyDetails',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}
