const express = require("express");

const routes = require('./routes');
require('./services/database');

class App {

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use('/.netlify/functions/index', routes);
  }

}

module.exports = new App().express;