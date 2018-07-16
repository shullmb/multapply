const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Listing = require('../models/listing');
const Group = require('../models/group');

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
    dateAvailable: new Date(req.body.dateAvailable),
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

// PUT /listings/:id/apply
router.put('/:id/apply', (req, res) => {
  let testGroup = {_id: "5b4d04919ba0160471adef24", name: "TEST GROUP" }
  Group.findOne({_id: testGroup._id }, function(err, group) {
    group.listings.push(group.id);
    group.save();
    Listing.findById(req.params.id, function(err, listing) {
      console.log(listing, group.id);
      listing.applicants.push(group.id);
      listing.save()
    })
  }).then( function(data) {
    res.sendStatus(200);
  });
})

// PUT /listings/:id
router.put('/:id', (req, res) => {
  console.log('🙌  🙌 HITTING THE PUT ROUTE 🙌  🙌')
  let updates = req.body;
  Listing.findByIdAndUpdate(req.params.id, {
    $set: updates
  }, function(err, listing) {
    err ? res.send(err) :
    listing.save( () => {
        console.log(listing)
        res.json(listing);
      });
    })
})

// DELETE /listings/:id
router.delete('/:id', (req, res) => {
  Listing.findByIdAndRemove(req.params.id, function(err) {
    err ? res.send(err) : res.sendStatus(200);
  })
})

module.exports = router;