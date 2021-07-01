var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, "price is mandatory field."]
    },
    quantity: {
        type: Number,
        required: true,
        min: [5, "Minimum 5 articles should be there."]
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);

// type: {
//     type: String,
//     enum: ["Electronics", "Non-Electronics"]
// },