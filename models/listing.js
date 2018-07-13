const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  propertyManager: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  description: String,
  address: {street: String, city: String, state: String, zip: Number},
  available: Boolean,
  dateAvailable: Date,
  numUnits: Number,
  bedrooms: Number,
  bathrooms: Number,
  sqFeet: Number,
  pets: {dogs: Boolean, cats: Boolean, other: Boolean},
  applicants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;