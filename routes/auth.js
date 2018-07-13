require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  //See if the email is already in the DB
  User.findOne({email: req.body.email}, function(err, user){
    if(user){
      //Alert the user 'email is taken'
     //Redirect to signup
     res.status(401).json({
       error: true,
       message: "Email already exists"
     });
   } else {
     //if the email is not taken..
      //create the user in the DB
     User.create({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
     },function(err, user){
        //check for any DB errors
      if(err){
        console.log("WE GOT AN ERROR CREATE THE USER!!!")
        console.log(err);
        res.status(401).json(err);
      } else {
        //Log the user in (sign a new token)
        console.log("JUST ABOUT TO SIGN THE TOKEN!!");
        var token = jwt.sign(user.toObject(),process.env.JWT_SECRET,{
          expiresIn: 60*60*24
        })
        //Return user and token to React apps
        res.json({user, token});
      }
     })
   }
  })
});

router.post('/login', (req, res)=>{
  //Look up upser in the DB
  User.findOne({email: req.body.email}, function(err,user){
    if (user){
      //if there is a user...
      //check their entered password against the hash
      if(user.authenticated(req.body.password)){
        //if it matches: log them in (sign a token)
      var token = jwt.sign(user.toObject(),process.env.JWT_SECRET,{
        expiresIn: 60*60*24
      });
      res.json({user,token});
    }else{
      //if it doesn't match: send error, redirect to login
      res.json({
        error: true,
        status: 401,
        message: 'Email or password is incorrect'
      });
    }



  } else{
    //if the user isn't in the db...
    res.json({
      error: true,
      status: 401,
      message: 'User does not exist'
    });
  }

})

})

router.post('/me/from/token', (req, res)=>{
  let token = req.body.token;
  //Check for the presense of a token
  if (!token){
    //They didn't send me a jsonwebtoken
    res.status(401).json({
      error: true,
      message: "You must pass a token"
    })
  } else {
    //we do have a token
    //validate the token
    jwt.verify(token, process.env.JWT_SECRET,function(err,user){
      if(err){
        //if the toke is invalid...
        res.status(401).json(err);
      } else {
            //look up the user in the //DB
        User.findById(user._id, function(err,user){
          if(err){
            res.status(401).json(err);
          } else {
              //send the user and the token back to the React app
            res.json({user, token});
          }
        })
      }
    })

  }
});

module.exports = router;
