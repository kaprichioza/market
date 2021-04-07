const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db', 'db.json'))
const db = low(adapter)

app.get('/', function (req, res) {
  return res.send('ok'); 
});
app.get('/api/v1/products', function (req, res) {
    const products = db.get('products'); 
    return res.json(products);
  });

app.listen(process.env.PORT || 8080);