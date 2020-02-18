const CategoryController = require("./controllers/CategoryController");
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");
const routes = require('express').Router();

routes.get('/', () => res.json({ hello: 'world' }));

// Categories
routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

// Posts
routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

// Users
routes.get('/users', UserController.index);
routes.get('/user/auth', UserController.show);
route.post('/user', UserController.store);

module.exports = routes;