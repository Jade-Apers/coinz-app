/*const { tree } = require('gulp');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coinzSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please fill in your firstname']
    },
    lastname: {
        type: String, 
        required: [true, 'Please fill in your lastname']
    },
    user: {
        type: String,
        required: [true, 'Thomas More email address required'],
        unique: true,
        coinz: Number 
    },
    password: {
        type: String, 
        required: true 
    }
});

const Coinz = mongoose.model('Coinz', coinzSchema);
module.exports = Coinz;*/