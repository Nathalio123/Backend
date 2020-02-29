const CategoryController = require("./controllers/CategoryController");
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");
const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ hello: 'world' }));

// Categories
routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);

// Posts
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.get('/posts/category/:id_category', PostController.showByCategory);
routes.post('/posts', PostController.store);

// Users
routes.get('/users', UserController.index);
routes.get('/user/login', UserController.show);
routes.post('/user', UserController.store);

module.exports = routes;