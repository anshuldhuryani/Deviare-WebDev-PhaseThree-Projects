var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({
    name: String,
    chat: String
})

module.exports = mongoose.model('Chat', chatSchema);