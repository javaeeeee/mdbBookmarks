const mongoose = require('mongoose');

const user = require('./user');

const dbURL = 'mongodb://localhost/mbookmarks';

const connection = mongoose.connect(dbURL);

mongoose.connection.on('connected', function () {
  console.log('Connected to the database');
});

mongoose.connection.on('error', function (err) {
  console.log(`Error connecting to the database: ${err}`);
});

mongoose.connection.on('disconnected', function () {
  console.log('Disconnected from the database');
});

const shutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log(`Closing connection to the database ${msg}`);
    callback();
  });
};

process.on('SIGINT', function () {
  shutdown('app termination', function () {
    process.exit(0);
  });
});