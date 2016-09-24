const mongoose = require('mongoose');

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
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;
