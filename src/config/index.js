const { dotenv } = require('dotenv');
var env = process.env.NODE_ENV || 'live'

var cfg = {};
    cfg.public = require('./config.'+env+'.public')
    cfg.private = {};
    cfg.private = require('./config.'+env+'.private')
        cfg.private.keys = require('./keys'); //importing default config values

module.exports = cfg;