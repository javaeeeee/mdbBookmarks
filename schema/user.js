var mongoose = require('mongoose');

var userSchema = {
    profile: {
        username: {
            type: String,
            required: true
        }
    },
    credentials: {
        password: {
            type: String,
            required: true
        }
    }
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;