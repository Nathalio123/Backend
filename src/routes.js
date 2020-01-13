const CategoryController = require("./controllers/CategoryController");
const PostController = require("./controllers/PostController");
const routes = require('express').Router();

routes.get('/', () => res.json({ hello: 'world' }));

// Categories
routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

// Pots
routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

module.exports = routes;