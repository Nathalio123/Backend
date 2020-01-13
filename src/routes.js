const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
})

module.exports = routes;