const mongoose = require('mongoose');
const { Schema } = mongoose;

// define workspace schema //
const workspaceSchema = new Schema({
  name:  { type: String, required: true },
  description: { type: String },
  category: { type: String },
  color: { type: String }
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports.Workspace = Workspace;