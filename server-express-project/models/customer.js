var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

module.exports = mongoose.model('Customer', customerSchema);