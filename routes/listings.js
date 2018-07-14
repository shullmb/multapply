const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Listing = require('../models/Listing');

// GET /listings
router.get('/', (req, res) => {
  Listing.find({}, function(err, listings) {
    if (err) {
      console.log(err);
    } else {
      res.json(listings)
    }
  })
})

// POST /listings
router.post('/', (req, res) => {
  Listing.create({
    propertyManager: { type: req.params._id, ref: 'User' },
    title: req.params.title,
    description: req.params.description,
    address: { 
      street: req.params.address.street,
      city: req.params.city, 
      state: String, 
      zip: Number },
    available: Boolean,
    dateAvailable: Date,
    numUnits: Number,
    bedrooms: Number,
    bathrooms: Number,
    sqFeet: Number,
    pets: { dogs: Boolean, cats: Boolean, other: Boolean },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
  })
})
// GET /listings/:id

// PUT /listings/:id

// DELETE /listings/:id


module.exports = router;