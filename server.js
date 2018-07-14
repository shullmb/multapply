require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');
const listings = require('./routes/listings')

const app = express();
//this line lets us accept POST data from axios
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/multapplyDev')


app.use(express.static(__dirname+ "/client/build"));

app.use('/auth', auth);
app.use('/listings', listings);



app.get('*',(req, res)=>{
  res.sendFile(__dirname + "/client/build/index.html");
});



var port = process.env.PORT || 3000;

var server = app.listen(port, ()=>{
  console.log('\x1b[36m%s\x1b[0m',`* * * Server listening on port: ${port} * * *`)
});

module.exports = server;
