import axios from 'axios';
export function addToCart(id) {
    return axios.post(`/api/v1/cart/add?productId=${id}`);
}
export function getCart() {
    return axios.get('/api/v1/cart/get');
}
export function getCatalog() {
    return axios.get('/api/v1/products');
}
export function getProductData(id) {
    return axios.get(`/api/v1/cart/get-product?productId=${id}`);
}