const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  members: [{type: Schema.Types.ObjectId, ref: 'User'}],
  listings: [{type: Schema.Types.ObjectId, ref: 'Listing'}]
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;