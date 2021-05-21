const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coinzSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    coinz: Number
});

const Coinz = mongoose.model('Coinz', coinzSchema);

module.exports = Coinz;