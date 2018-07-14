const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");


router.('/:id', (req, res)=>{
  User.findByIdandUpdate(req.params.id,{

      first: req.body.name.first,
      last: req.body.name.last,
      bio: req.body.bio,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      street: req.body.currentAddress.street,
      city: req.body.currentAddress.city,
      zip: req.body.currentAddress.zip,
      socialSecurity: req.body.socialSecurity,
      currentEmployer: req.body.currentEmployer,
      currentMonthIncome: req.body.currentMonthIncome,
      creditScore: req.body.creditScore,
      }).
    })

  })
