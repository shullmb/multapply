const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const prevAddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
})

const referenceSchema = new mongoose.Schema({
  name: String, 
  phone: Number, 
  email: String
})

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: false},
  password: {type: String, required: false},
  bio: String,
  dateOfBirth: Date, 
  phone: Number,
  street: String, 
  city: String, 
  state: String, 
  zip: Number,
  prevAddresses: [prevAddressSchema], // Child of User
  socialSecurity: Number,
  currentEmployer: String,
  currentMonthIncome: Number,
  creditScore: {type: Number, min: 300, max: 850},
  groupId: {type: mongoose.Schema.Types.ObjectId, ref: 'Listing'},
  references: [referenceSchema], // Child of User
  isPropertyManager: Boolean,
  propertiesManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }],
})

userSchema.virtual('currentAddress').get( function() {
  return this.street + ' ' + this.city + ' ' + this.state + ' ' + this.zip;
})

userSchema.set('toObject', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      name: ret.name,
      email: ret.email,
      bio: ret.bio,
      dateOfBirth: ret.dateOfBirth,
      phone: ret.phone,
      currentAddress: ret.currentAddress,
      prevAddresses: ret.prevAddresses,
      socialSecurity: ret.socialSecurity,
      currentEmloyer: ret.currentEmloyer,
      currentMonthIncome: ret.currentMonthIncome,
      creditScore: ret.creditScore,
      references: ret.references,
      isPropertyManager: ret.isPropertyManager,
      propertiesManaged: ret.propertiesManaged
    }
    return returnJson;
  }
})

// checks password input against hashed password - returns boolean 
userSchema.methods.authenticated = function (password) {
  return bcrypt.compareSync(password, this.password);
}

// middleware to hash password before inserted into db
userSchema.pre('save', function (next) {
  if (this.isNew) {
    let hash = bcrypt.hashSync(this.password, 12);
    this.password = hash;
  }
  next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;