const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");


router.put('/:id', (req, res)=>{
  User.findByIdandUpdate(req.params.id,{

      name: {first: req.body.name.first, last: req.body.name.first},
      bio: req.body.bio,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      currentAddress:{street: req.body.currentAddress.street, city: req.body.currentAddress.city, zip: req.body.currentAddress.zip},
      prevAddresses: { street: req.body.prevAddresses.street, city: req.body.prevAddresses.street, state: req.body.prevAddresses.state, zip: req.body.prevAddresses.zip},
      socialSecurity: req.body.socialSecurity,
      currentEmployer: req.body.currentEmployer,
      currentMonthIncome: req.body.currentMonthIncome,
      creditScore: req.body.creditScore
    }),function(err, user){
      if(err) {
        console.log(err);
      } else {
        console.log(user);
        res.status(200);
      }
    }
  })

  module.exports = router;
