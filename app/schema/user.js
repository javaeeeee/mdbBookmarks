const mongoose = require('mongoose');

const Bookmark = require('./bookmark');

const userSchema = {
  profile: {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+@.+\..+/,
    },
  },
  credentials: {
    password: {
      type: String,
      required: true,
    },
  },
  bookmarks: [Bookmark],
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;
