import request from '@/utils/request'

export function fetchCartList(query) {
  return request({
    url: 'api/cart',
    method: 'get',
    params: query
  })
}

export function addCart(data) {
    return request({
      url: 'api/cart',
      method: 'post',
      data
    })
}

export function updateCart(data) {
    return request({
      url: 'api/cart',
      method: 'put',
      data
    })
}

export function settle(data) {
    return request({
      url: 'api/cart/settle',
      method: 'post',
      data
    })
} 