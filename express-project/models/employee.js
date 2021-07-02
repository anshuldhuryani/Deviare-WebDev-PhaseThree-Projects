var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
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

module.exports = mongoose.model('Employee', employeeSchema);