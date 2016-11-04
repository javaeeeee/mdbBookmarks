const mongoose = require('mongoose');

const user = require('../schema/user');

const users = mongoose.model('Users', user);

const CODE = 200;
const STATUS = 'success';

/**
 * Fake response.
 */
const printStatus = function (res, code, status) {
  res.status(code);
  res.json({ status });
};

const getAll = function (req, res) {
  printStatus(res, CODE, STATUS);
};

const getOne = function (req, res) {
  printStatus(res, CODE, STATUS);
};

const add = function (req, res) {
  printStatus(res, CODE, STATUS);
};

const modify = function (req, res) {
  printStatus(res, CODE, STATUS);
};

const remove = function (req, res) {
  printStatus(res, CODE, STATUS);
};

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.add = add;
module.exports.modify = modify;
module.exports.remove = remove;
