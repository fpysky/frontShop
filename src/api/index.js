import request from '@/utils/request'

export function banners(query) {
  return request({
    url: 'api/index/banners',
    method: 'get',
    params: query
  })
}

export function mobilePhones(query) {
    return request({
      url: 'api/index/mobilePhones',
      method: 'get',
      params: query
    })
  }

export function storeAddress(data) {
    return request({
      url: 'api/addresses',
      method: 'post',
      data
    })
}

export function deleteAddress(data) {
    return request({
      url: 'api/addresses',
      method: 'delete',
      data
    })
}