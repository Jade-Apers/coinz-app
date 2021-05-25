const { Binary } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coinzSchema = new Schema({
        text: {
            type: String,
            required: true
        },
        user: String,
        completed: Boolean,
        reason: {
            type: String
        },
        coinz: {
            type: Number
        },
        picture: {
            type: String
        }

})

const Coinz = mongoose.model('Coinz', coinzSchema);
module.exports = Coinz;