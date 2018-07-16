const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require("../models/group");


// GET /groups
router.get('/', (req, res) => {
  Groups.find({}, function(err, listings) {
    if (err) {
      console.log(err);
    } else {
      res.json(listings)
    }
  })
})

router.post('/', (req, res) => {
  console.log('post route')
  Group.create(
    {name: req.body.name},
    function (err, group) {
    if (err) {
      console.log(err);
    } else {
      res.json(group)
    }
  })
})


router.put('/:id', (req,res) => {
  Group.findByIdAndUpdate(req.params.id,
  {name: req.body.name},
  function (err, group) {
    if (err) {
      console.log(err);
    } else {
      res.json(group)
    }
  })
})

router.put('/:id/addListing', (req,res) => {
  Group.findByIdAndUpdate(req.params.id,
  {$push: {listings: req.body.listings}},
  function (err, group) {
    if (err) {
      console.log(err);
    } else {
      res.json(group)
    }
  })
})
module.exports = router;
