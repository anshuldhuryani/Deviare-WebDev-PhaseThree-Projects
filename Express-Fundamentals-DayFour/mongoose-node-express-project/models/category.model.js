var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String,
    desc: String,
    products: [
        { type: mongoose.Schema.ObjectId, ref: 'Product' }
    ]
});

module.exports = mongoose.model('Category', categorySchema);