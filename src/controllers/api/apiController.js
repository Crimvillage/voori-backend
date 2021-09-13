const express = require('express')
const users = express.Router()
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const User = require("../../models/User")
users.use(cors());


var api = {};

api.hello_world = function (req, res){
    res.send('Hello world!!');
};

//Needs some refinery, needs support for communication between two node.js servers
api.register = async function (req, res){
  const today = new Date().toDateString()
  const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        datetime: today
  }

  User.findOne({
    where: {
        email: req.body.email,
        username: req.body.username,
    }
  })
      .then(user => {
          if (!user) {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
              userData.password = hash
              User.create(userData)
                  .then(user => {
                      res.json({ status: user.email + 'REGISTERED' })
                  })
                  .catch(err => {
                      res.send('ERROR: ' + err)
                  })
              })
          } else {
              res.json({ error: "USER ALREADY EXISTS" })
          }
      })
      .catch(err => {
          res.send('ERROR: ' + err)
      })
}
  // Our register logic ends here




module.exports = api;