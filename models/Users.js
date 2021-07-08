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
    ticket: [{
        from: {
            type: String,
            required: true

        },
        to: {
            type: String,
            required: true

        },
        nameArray: {
            type: [String],
            required: true
        },
        noArray: {
            type: [String],
            required: true
        },
        tokenData: {
            type: String,
            required: true

        },
        dat: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }

    }],

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = User = mongoose.model('user', UserSchema)