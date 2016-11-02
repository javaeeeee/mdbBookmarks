require('./schema/db');
const routes = require('./routes/routes');
const express = require('express');

const app = express();

app.use('/', routes);

module.exports = app;
