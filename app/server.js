var express = require('express')
var app = express()
var router = require('../src/routes')



app.listen(3000)
var database = require('../src/libs/database')

app.use('/', router);


module.exports = app;


