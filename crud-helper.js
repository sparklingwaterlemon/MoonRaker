require('dotenv').config();
require('./config/database');

// Mongoose models
const Astronaut = require('./models/astronaut');
const Log = require('./models/log');


// local variables
let a, l;