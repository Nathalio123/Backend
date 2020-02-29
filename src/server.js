const express = require("express");

const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv');

class App {

  constructor() {
    dotenv.config();
    require('./services/database');
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

}

module.exports = new App().express;