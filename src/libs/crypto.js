const crypto = require('crypto');
var cfg = require('../config')
const algorithm = cfg.private.crypto.algorithm;
const secretKey = cfg.private.keys.crypto;
const iv = cfg.private.crypto.iv;

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

//var hash = encrypt('')
//console.log(hash)


module.exports = {
    encrypt,
    decrypt
};