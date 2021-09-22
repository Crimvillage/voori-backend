const Sequelize = require('sequelize');
var cfg = require('../config');

const {decrypt} = require('./crypto');
// initialize an instance of Sequelize

var sequelize = new Sequelize(decrypt(cfg.private.db.name), decrypt(cfg.private.db.user), decrypt(cfg.private.db.pass), {
    host: decrypt(cfg.private.db.host),
    dialect: 'mariadb'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  })

// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully, Connected to '+ decrypt(cfg.private.db.host)))
  .catch(err => console.error('Unable to connect to the database:', err));

//Load models
var models = require('../models')



module.exports=sequelize;

