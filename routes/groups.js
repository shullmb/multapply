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
  Group.create({
    name: req.body.name},
    {$push: {members: members.ObjectId}},
    {$push: {listings: listings.ObjectId}},
    function (err, group) {
    if (err) {
      console.log(err);
    } else {
      res.json(group)
    }
  }
  })
})

router.put('/:id', (req, res) => {
  Group.findByIdAndUpdate({
    name: req.body.name},
    {$push: {members: members.ObjectId}},
    {$push: {listings: listings.ObjectId}},
    function (err, group) {
    if (err) {
      console.log(err);
    } else {
      res.json(group)
    }
  }
  })
})

module.exports = router;
