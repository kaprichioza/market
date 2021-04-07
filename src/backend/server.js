const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.get('/', function (req, res) {
  return res.send('ok'); 
});

app.listen(process.env.PORT || 8080);