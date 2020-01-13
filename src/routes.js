const CategoryController = require("./controllers/CategoryController");
const routes = require('express').Router();

routes.get('/', () => res.json({ hello: 'world' }));

// Categories

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

module.exports = routes;