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
    propertyManager: req.params.propertyManager,
    title: req.params.title,
    description: req.params.description,
    address: { 
      street: req.params.address.street,
      city: req.params.city, 
      state: req.params.state, 
      zip: req.params.zip 
    },
    available: req.params.available,
    dateAvailable: req.params.dateAvailable,
    numUnits: req.params.numUnits,
    bedrooms: req.params.bedrooms,
    bathrooms: req.params.bathrooms,
    sqFeet: req.params.sqFeet,
    pets: { dogs: req.params.dogs, cats: req.params.cats, other: req.params.other },
    applicants: []
  }, function(err, listing) {
    if (err) {
      console.log(err)
    } else {
        console.log(`LISTING: ${listing}`)
      // Listing.findById(listing._id).populate()
      res.json(listing);
    }
  })
})

// GET /listings/:id

// PUT /listings/:id

// DELETE /listings/:id


module.exports = router;