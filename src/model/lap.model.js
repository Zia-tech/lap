const { partialDeepStrictEqual } = require('assert');
const mongoose = require('mongoose');

const lapSchema = new mongoose.Schema({
    lapName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    modelYear: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    RAM: {
        type: String,
        required: true,
    },
    storage: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});
module.exports= mongoose.model('Lap',lapSchema);