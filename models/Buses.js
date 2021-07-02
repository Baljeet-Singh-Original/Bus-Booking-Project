const mongoose = require('mongoose');
const BusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    company: {
        type: String,
        required: true

    },
    stops: {
        type: [String],
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }

});



module.exports = Buses = mongoose.model('busData', BusSchema);