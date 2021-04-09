import axios from 'axios'
export function addToCart (id) {
  return axios.post(`/api/v1/cart/add?productId=${id}`)
}
export function getCart () {
  return axios.get('/api/v1/cart/get')
}
export function getCatalog (ids) {
  return axios.get(
    `/api/v1/products?ids=${Array.isArray(ids) ? ids.join(',') : ''}`
  )
}
export function removeFromCart (ids) {
  if (ids.length === 1)
    return axios.post(`/api/v1/cart/delete?productId=${ids[0]}`)
  const body = ids.reduce((accum, id) => {
    accum[id] = 0
    return accum
  }, {})
  return axios.post(`/api/v1/cart/update`, body)
}
export function orderFromCart (ids) {
  const body = ids.reduce((accum, id) => {
    accum[id] = 0
    return accum
  }, {})
  return axios.post(`/api/v1/cart/update`, body)
}
