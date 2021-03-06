const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coinzSchema = new Schema({

    sender: {
        type: Object,
        required: true
    },
    receiver: {
        type: Object,
        required: true
    },

    receiver: {
        type: String,
        required: true
    },

    coinz: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
   message: String,
   date: Date
})

const Coinz = mongoose.model('Coinz', coinzSchema);
module.exports = Coinz;
