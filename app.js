const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

require('./app/schema/db');
const routes = require('./app/routes/bookmarks');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// catch 404 and forward to error handler
const catchNotFound = function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};
app.use(catchNotFound);

// error handlers

// development error handler
const devErrorHandler = function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: err,
  });
};
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(devErrorHandler);
}

// production error handler
const productionErrorHandler = function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
};
// no stacktraces leaked to user
app.use(productionErrorHandler);

module.exports = app;
