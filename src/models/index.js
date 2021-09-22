// require the node packages
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
// set a reference to this file's name so we can exclude it later
var basename  = path.basename(__filename);

// initalize a db object
const db = {};

var cfg = require('../config');

const {decrypt} = require('../libs/crypto');
// initialize an instance of Sequelize

const sequelize = new Sequelize(decrypt(cfg.private.db.name), decrypt(cfg.private.db.user), decrypt(cfg.private.db.pass), {
    host: decrypt(cfg.private.db.host),
    dialect: 'mariadb',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })


db.user = require('./user')(sequelize, Sequelize)
db.role = require('./role')(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

// export the main sequelize package with an uppercase 'S' and 
// our own sequelize instance with a lowercase 's'
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;