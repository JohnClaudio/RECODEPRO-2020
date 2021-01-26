const express = require('express');
const bodyParser = require('body-parser'); 
const consign = require('consign')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views','./views')

 consign()
 .include('./routes')
 .into(app)
 
 module.exports = app;