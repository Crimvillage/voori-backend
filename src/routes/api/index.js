var express = require('express')
var router = express.Router()

var controllers = require('../../controllers')


router.get('/', controllers.api.hello_world)

module.exports = router;