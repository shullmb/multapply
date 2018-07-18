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

// POST /groups
// TODO: ADD groupId to user when Group created
router.post('/', (req, res) => {
  console.log('post route')
  Group.create(
    {name: req.body.name},
    function (err, group) {
    if (err) {
      console.log(err);
    } else {
      group.members.push(req.body.ownerId);
      group.save()
      User.findByIdAndUpdate(req.body.ownerId, {
        $set: {groupId: group._id}
      }, function(err, user) {
        err ? res.send(err) : res.send(200)
      })
    }
  })
})

router.get('/:id', (req, res) => {
  Group.findOne({_id: req.params.id})
    .populate('listings')
    .populate('members')
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

//TODO: wire up add button
router.put('/:id/addUser', (req, res) => {
  console.log('🔥 🔥 ADDING USER TO GROUP🔥 🔥 ')
  let groupId = req.body.groupId
  User.findOne({_id: req.body.userId }, function(err, user) {
    user.groupId = groupId // this should be a group id --- req.params.id? 
    //circular ref? 
    //TODO: to resolve see ln 21
    console.log(user.groupId)
    user.save();
    Group.findById(req.params.id, function(err, group) {
      console.log(group.members);
      group.members.push(user.id);
      group.save()
    })
  }).then( function(data) {
    res.sendStatus(200);
  });
})



module.exports = router;
