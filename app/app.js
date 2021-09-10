var express = require('express')
var app = require('./server')
var bodyParser = require('body-parser')
const path = require('path')

require('./server.js')

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// View Engine Setup
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'ejs')


module.exports = app;