import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'api/addresses',
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