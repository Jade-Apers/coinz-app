const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
   // firstname: String,
    //lastname: String,
    username: String,
    email: String,
    coinz: Number   
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
