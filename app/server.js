
var shared = require('./app')
var app = shared.app
const db = require('../src/models')
var cfg = require('../src/config')

var server = function (req, res) {
    if (cfg.private.drop == false) {
    db.sequelize.sync({ force: false }).then(() => {
  
    // inside our db sync callback, we start the server
    // this is our way of making sure the server is not listening 
    // to requests if we have not made a db connection
     app.listen(cfg.private.http_port, () => {
      console.log(`App listening on PORT ${cfg.private.http_port}`);
    });
  });
} else {
    app.listen(cfg.private.http_port, () => {
        console.log(`App listening on PORT ${cfg.private.http_port}`);
      });
}};
module.exports = {db, server}