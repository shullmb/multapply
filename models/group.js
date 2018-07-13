const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  listings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Listing'}]
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;