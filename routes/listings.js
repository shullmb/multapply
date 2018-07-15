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
  console.log('><><> hitting LISTING POST route <><><')
  Listing.create({
    propertyManager: req.body.propertyManager,
    title: req.body.title,
    description: req.body.description,
    street: req.body.street,
    city: req.body.city, 
    state: req.body.state, 
    zip: req.body.zip,
    available: req.body.available,
    dateAvailable: req.body.dateAvailable,
    numUnits: req.body.numUnits,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    sqFeet: req.body.sqFeet,
    dogs: req.body.dogs, 
    cats: req.body.cats, 
    otherPets: req.body.other,
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
router.get('/:id', (req, res) => {
  console.log('<><> HITTING THE SHOW ROUTE <><>')
  Listing.findOne({_id: req.params.id}, function(err, listing) {
    err ? res.send(err) : console.log(listing);
    res.json(listing);
  })
})

// PUT /listings/:id
router.put('/:id', (req, res) => {
  
})

// DELETE /listings/:id


module.exports = router;