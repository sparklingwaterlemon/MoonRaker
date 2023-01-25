require('dotenv').config();
require('./config/database');

// Mongoose models
const User = require('./models/user');
// const Log = require('./models/log');


// local variables
let u, l;