var express = require('express');
var router = express.Router();

var api = require('./api');
var controllers = require('../controllers')

router.use('/api', api);
router.get('*', controllers.forbidden)




module.exports = router