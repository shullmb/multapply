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
    .populate('users')
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

router.delete('/:id', (req, res) => {
    Group.remove({_id: req.params.id}, function(err) {
      console.log(err);
    })
    res.sendStatus(200);
  });

router.put('/:id/addUser', (req, res) => {
  let testUser = {_id: "5b4d0dd2e2fbeb62e8b4ad9c", name: "TEST USER" }
  User.findOne({_id: testUser._id }, function(err, user) {
    user.groupId = user.id;
    console.log(user.groupId)
    user.save();
    Group.findById(req.params.id, function(err, group) {
      console.log(group.members);
      group.members.push(user.groupId);
      group.save()
    })
  }).then( function(data) {
    res.sendStatus(200);
  });
})



module.exports = router;
