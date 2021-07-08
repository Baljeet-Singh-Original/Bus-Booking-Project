const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    contact: {
        type: String
    },
    dob: {
        type: Date
    },
    gender: {
        type: String,
        required: true
    },
    ticket: [Object],

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = User = mongoose.model('user', UserSchema)