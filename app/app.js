const express = require('express');
const path = require('path');

const cors = require("cors");
const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));



//var router = express.Router()
const routes = require('../src/routes')
var cfg = require('../src/config')

// parse application/json
app.use(express.json())
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// View Engine Setup
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'ejs')



//app.use('/', routes);

require('../src/routes/auth')(app);
require('../src/routes/user')(app);

//require('./server.js')
const db = require('../src/models')
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
if (cfg.private.db.drop_tables == true) {
  db.sequelize.sync({ force: true }).then(() => {
    app.listen(cfg.private.http_port, () => {
      initial();
    console.log(`App listening on PORT ${cfg.private.http_port}`);
    });
  });
  } else {
  db.sequelize.sync({ force: false }).then(() => {
    app.listen(cfg.private.http_port, () => {
      console.log(`App listening on PORT ${cfg.private.http_port}`);
    });
  });
};
  


module.exports = app