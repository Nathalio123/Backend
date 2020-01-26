const mongoose = require('mongoose');

// Constants
let isConnected = false;
mongoose.Promise = global.Promise;

// Main
const connectToDatabase = (urlConnection) => {
  if (!urlConnection) throw new Error('Not urlConnection provided or the urlConnection is invalid');

  if (isConnected) {
    return Promise.resolve();
  }
  // TODO: Remove the next line
  return mongoose.connect(urlConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((db) => { isConnected = db.connections[0].readyState; });
};

// Main
module.exports = {
  connectToDatabase,
};