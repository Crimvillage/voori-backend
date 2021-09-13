var express = require('express');
var router = express.Router();


var controllers = require('../../controllers')


router.get('/secure', controllers.api.hello_world)
router.post('/register', controllers.api.register) //not done yet, works but i do need to make this request from another server





module.exports = router;