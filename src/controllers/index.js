const api = require('./api/apiController')

var controllers = {}
    controllers.api = require('./api/apiController')
        //controllers.api.hello_world = api.hello_world
        //controllers.api.register = api.register

    controllers.forbidden = function (req, res) {
        res.status(403);
        res.render('error/forbidden');
    };
module.exports = controllers;