const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");


// GET /users -- 
router.get('/', (req, res) => {
  User.find({}, function(err, users) {
    err ? res.send(err) : res.json(users);
  })
})

// PUT /users/:id
router.put('/:id', (req, res) => {
  console.log('🙌  🙌 HITTING THE PUT ROUTE 🙌  🙌')
  let updates = req.body;
  User.findByIdAndUpdate(req.params.id, {
    $set: updates
  }, {new: true}, function(err, user) {
    err ? res.send(err) :
    user.save( () => {
        console.log(user)
        res.json(user);
      });
    })
})

// DELETE /users/:id
router.delete('/:id', (req, res) => {
    User.remove({_id: req.params.id}, function(err) {
      console.log(err);
    })
    res.sendStatus(200);
  });

  module.exports = router;
