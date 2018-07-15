const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  propertyManager: String, //{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  title: String,
  description: String,
  street: String, 
  city: String, 
  state: String, 
  zip: Number,
  available: Boolean,
  dateAvailable: Date,
  numUnits: Number,
  bedrooms: Number,
  bathrooms: Number,
  sqFeet: Number,
  dogs: Boolean, 
  cats: Boolean, 
  otherPets: Boolean,
  applicants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;