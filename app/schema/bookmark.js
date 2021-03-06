const mongoose = require('mongoose');
//const User = require('./user');

const bookmarkSchema = {
  name: {
    type: String,
    required: true,
    maxLength: 140,
  },
  url: {
    type: String,
    required: true,
    match: /^http:\/\//i,
  },
  description: {
    type: String,
    maxlength: 1024,
  },
  //user: User.userSchema,
};

module.exports = new mongoose.Schema(bookmarkSchema);
module.exports.bookmarkSchema = bookmarkSchema;
