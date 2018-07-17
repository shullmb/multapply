const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require("../models/group");
const User = require("../models/User");
const Listing = require("../models/listing");


// GET /groups
router.get('/', (req, res) => {
  Group.find({}, function(err, listings) {
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

router.get('/:id', (req, res) => {
  Group.findOne({_id: req.params.id})
    .populate('listings')
    .exec(
      function(err, group) {
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
      res.json(group);
    }
  })
})







module.exports = router;
