import axios from 'axios';
export function addToCart(id) {
    return axios.post(`/api/v1/cart/add?productId=${id}`);
}
export function getCart() {
    return axios.get('/api/v1/cart/get');
}
export function getCatalog(ids) {
    return axios.get(`/api/v1/products?ids=${ids && ids.join(',')}`);
}