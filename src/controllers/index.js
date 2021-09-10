var api = require('./apiController')

var controllers = {}
    controllers.api = {}
        controllers.api.hello_world = api.hello_world

    controllers.forbidden = function (req, res) {
        res.render('error/forbidden')
    }
module.exports = controllers;