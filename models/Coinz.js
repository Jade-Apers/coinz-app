const { tree } = require('gulp');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coinzSchema = new Schema({

    user: {
        type: Object,
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
   completed: Boolean
})

const Coinz = mongoose.model('Coinz', coinzSchema);
module.exports = Coinz;