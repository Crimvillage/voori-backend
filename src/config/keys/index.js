const crypto = require('./crypto.js');
const JWT = require('./jwt.js');

var keys = {};

keys.crypto = {}
keys.crypto = crypto.secretKey;

keys.JWT = {}
keys.JWT = JWT.secret

module.exports = keys;


