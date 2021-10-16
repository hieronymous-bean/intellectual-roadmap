const mongoose = require('mongoose');
const { Schema } = mongoose;

// define user schema //
const userSchema = new Schema({
  userId: { type: String, required: true },
  displayName: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;