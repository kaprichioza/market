const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db', 'db.json'))
const db = low(adapter)
app.use(express.static(path.join(__dirname, '../../', 'build')));
app.use(express.json())
app.use(cookieParser())
app.get('/api/v1/products', function (req, res) {
  const productIds = req.query.ids
  if (productIds) {
    const ids = productIds.split(',')
    const filterProducts = db
      .get('products')
      .filter(product => ids.includes(String(product.id)))
      .value()
    return res.json(filterProducts)
  }
  const products = db.get('products')
  return res.json(products)
})
app.get('/api/v1/cart/get', function (req, res) {
  const token = req.cookies && req.cookies.sessionToken
  const cartItems = db.get(`cart[${token}]`).value()
  return res.json(cartItems)
})
app.post('/api/v1/cart/delete', function (req, res) {
  const token = req.cookies && req.cookies.sessionToken
  const productId = req.query.productId
  const currentCartItems = db.get(`cart.[${token}]`).value() || []
  const newItems = currentCartItems.filter(product => product !== productId)
  db.set(`cart[${token}]`, newItems).write()
  return res.json(newItems)
})
app.post('/api/v1/cart/update', function (req, res) {
  const parameters = req.body
  const token = req.cookies && req.cookies.sessionToken
  const currentCartItems = db.get(`cart.[${token}]`).value() || []
  const newItems = currentCartItems.filter(
    product => String(parameters[product]) !== '0'
  )
  db.set(`cart[${token}]`, newItems).write()
  return res.json(newItems)
})

app.post('/api/v1/cart/add', function (req, res) {
  const productId = req.query.productId
  const token = req.cookies && req.cookies.sessionToken
  const currentCartItems = db.get(`cart.[${token}]`).value() || []
  currentCartItems.push(productId)
  db.set(`cart[${token}]`, currentCartItems).write()
  return res.json(currentCartItems)
})
app.get('*', function (req, res) {  
  res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080)
