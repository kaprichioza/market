const express = require('express');
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db', 'db.json'))
const db = low(adapter)

app.get('/', function (req, res) {
    return res.send('ok');
});
app.use(cookieParser());
app.get('/api/v1/products', function (req, res) {
    const products = db.get('products');
    return res.json(products);
});
app.get('/api/v1/cart/get', function (req, res) {
    const token = req.cookies && req.cookies.sessionToken;
    const cartItems = db.get(`cart[${token}]`).value();
    return res.json(cartItems);
});
app.get('/api/v1/cart/get-product', function (req, res) {
    const productId = req.query.productId - 1;
    const productData = db.get(`products.[${productId}]`).value()
    return res.json(productData);
})
app.post('/api/v1/cart/add', function (req, res) {
    const productId = req.query.productId;
    const token = req.cookies && req.cookies.sessionToken;
    const currentCartItems = db.get(`cart.[${token}]`).value() || [];
    currentCartItems.push(productId);
    db.set(`cart[${token}]`, currentCartItems)
        .write()
    return res.json(currentCartItems);
});

app.listen(process.env.PORT || 8080);