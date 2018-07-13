const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  address: { street: String, city: String, state: String, zip: Number },
  available: Boolean,
  dateAvailable: Date,
  bedrooms: Number,
  bathrooms: Number,
  sqFeet: Number,
  pets: {dogs: Boolean, cats: Boolean, other: Boolean},
  applicants: [{type: Schema.Types.ObjectId, ref: 'Group'}]
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;