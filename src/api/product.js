import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'api/addresses',
    method: 'get',
    params: query
  })
}

export function products(data) {
    return request({
      url: 'api/products',
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