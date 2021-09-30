const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true
    },

    rating: {
        type: Number,
        required: [true, "Please provide the rating"]
    },

    description: {
        type: String,
        required: [true, "Please provide a description"]
    },

    price: {
        type: Number,
        required: [true, "Please provide bootcamp with price"]
    }
})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema);
module.exports = Bootcamp;