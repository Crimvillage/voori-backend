const express = require('express')
const users = express.Router()

const bcrypt = require('bcrypt');



var api = {};

api.hello_world = function (req, res){
    res.send('Hello world!!');
};


module.exports = api;