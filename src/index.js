const app = require('./server');
const dotenv = require('dotenv');
const serverless = require("serverless-http");

dotenv.config();

module.exports.handler = serverless(app);

