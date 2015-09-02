var config = require('/home/renuka/MEANProjects/r1/config/mongoose.js'),
mongoose = require('mongoose');
module.exports = function() {
var db = mongoose.connect('mongodb://localhost/mongodb');
require('../app/models/user.server.model');
return db;
};
