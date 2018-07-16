const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");




router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      bio: req.body.bio,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      prevAddresses: [],
      socialSecurity: req.body.socialSecurity,
      currentEmployer: req.body.currentEmployer,
      currentMonthIncome: req.body.currentMonthIncome,
      creditScore: req.body.creditScore
    },function(err, user) {
      if(err) {
        console.log(err);
      } else {
        console.log(user);
        res.json(user);
      }
    })
  })

  module.exports = router;




  
