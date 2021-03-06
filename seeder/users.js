const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/multapplyDev');
var User = require('../models/User');
//We require mongoose.
//We connect to the local host under jwt so the different users can access different seeds.
//We require the model, so the data is populated in the db.

//Set the Array of objects to a const.
const userSeeder = [
  {
    name: 'Brody Sissons',
    email: 'bsissons0@virginia.edu',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: '2/2/1927',
    phone: 2698859825,
    street: '12191 Derek Crossing',
    city: 'Magsaysay',
    state: 'Washington',
    zip: 9221,
    socialSecurity: 131724887,
    currentEmployer: 'Aufderhar, Beatty and Botsford',
    currentMonthIncome: 7819,
    creditScore: 	720,
    isPropertyManager: true,
  },
  {
    name: 'Siana Weiser',
    email: 'sweiser1@qq.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: '1/7/1920',
    phone: 5418384486,
    street: '0 Dawn Court',
    city: 'Taourirt',
    state: 'Washington',
    zip: 9331,
    socialSecurity: 352772119,
    currentEmployer: 'Luettgen, Robel and Borer',
    currentMonthIncome: 2575,
    creditScore: 	596,
    isPropertyManager: true,
  },
  {
    name: 'Morgan Earland',
    email: 'mearland2@histats.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	12/10/1929,
    phone: 	4702768363,
    street: '4509 Muir Place',
    city: 'Taourirt',
    state: 'Washington',
    zip: 9241,
    socialSecurity: 281105413,
    currentEmployer: 'Little-Harris',
    currentMonthIncome: 1626,
    creditScore: 	580,
    isPropertyManager: false,
  },
  {
    name: 'Dugald Sibley',
    email: 'dsibley3@tamu.edu',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	11/1/1912,
    phone: 	6919194035,
    street: '52052 2nd Way',
    city: 'Sulbiny Górne',
    state: 'Washington',
    zip: 08420,
    socialSecurity: 260045197,
    currentEmployer: 'Stokes, Bergstrom and Boyer',
    currentMonthIncome: 1966,
    creditScore: 771,
    isPropertyManager: false,
  },
  {
    name: 'Heddi Frisby',
    email: 'hfrisby4@list-manage.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	8/15/1904,
    phone: 	9717303369,
    street: '1160 Lillian Crossing',
    city: 'Muyinga',
    state: 'Washington',
    zip: 08380,
    socialSecurity: 149095479,
    currentEmployer: 'Schulist-Conroy',
    currentMonthIncome: 1751,
    creditScore: 452,
    isPropertyManager: false,
  },
  {
    name: 'Zelig Brader',
    email: 'zbrader5@squarespace.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	8/25/2006,
    phone: 	5246268868,
    street: '120 Moland Crossing',
    city: 'San Antonio',
    state: 'Washington',
    zip: 72089,
    socialSecurity: 226868992,
    currentEmployer: 'Jacobi, Lemke and Paucek',
    currentMonthIncome: 9935,
    creditScore: 640,
    isPropertyManager: false,
  },
  {
    name: 'Augusta Phillimore',
    email: 'aphillimore6@cnn.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	9/28/1987,
    phone: 4684122512,
    street: '0 Claremont Lane',
    city: 'Nyurba',
    state: 'Washington',
    zip: 678450,
    socialSecurity: 226868992,
    currentEmployer: 'Zboncak, Nienow and Boyle',
    currentMonthIncome: 1510,
    creditScore: 513,
    isPropertyManager: false,
  },
  {
    name: 'Yovonnda Charteris',
    email: 'ycharteris7@i2i.jp',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	2/18/1934,
    phone: 9516916904,
    street: '574 Utah Plaza',
    city: 'Si Racha',
    state: 'Washington',
    zip: 20110,
    socialSecurity: 513586728,
    currentEmployer: 'Stoltenberg-Lakin',
    currentMonthIncome: 9667,
    creditScore: 368,
    isPropertyManager: false,
  },
  {
    name: 'Lu Lippard',
    email: 'llippard8@tripadvisor.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	8/1/1988,
    phone: 8371448860,
    street: '46686 Beilfuss Terrace',
    state: 'Washington',
    city: 'Nanshan',
    zip: 30110,
    socialSecurity: 589923966,
    currentEmployer: 'Lehner-Schaefer',
    currentMonthIncome: 7193,
    creditScore: 537,
    isPropertyManager: false,
  },
  {
    name: 'Bambie Timby',
    email: 'btimby9@wunderground.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	1/5/1985,
    phone: 	8446892908,
    street: '88 Hudson Road',
    city: 'Gunungsubang',
    state: 'Washington',
    zip: 35610,
    socialSecurity: 824862159,
    currentEmployer: 'Waelchi and Sons',
    currentMonthIncome: 5394,
    creditScore: 820,
    isPropertyManager: false,
  },
  {
    name: 'Sonnnie Missen',
    email: 'smissena@bigcartel.com',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	5/2/1906,
    phone: 	4863892816,
    street: '93552 Johnson Trail',
    city: 'Longshi',
    state: 'Washington',
    zip: 25416,
    socialSecurity: 651294940,
    currentEmployer: 'McClure, Kreiger and Pfannerstill',
    currentMonthIncome: 29734,
    creditScore: 	640,
    isPropertyManager: false,
  },
  {
    name: 'Millie Aronovitz',
    email: 'maronovitzb@washington.edu',
    password: 'password',
    bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    dateOfBirth: 	7/30/1944,
    phone: 	1056782252,
    street: '9109 Spohn Plaza',
    city: 'Melgar',
    state: 'Washington',
    zip: 734007,
    socialSecurity: 369373685,
    currentEmployer: 'Becker-Mante',
    currentMonthIncome: 8679,
    creditScore: 	816,
    isPropertyManager: false,
  },


];

//Use the insertMany function to seed to the db.
//This must be run in node.
User.insertMany(userSeeder, (err, docs) => {
  console.log(err);
  console.log(docs);
})
