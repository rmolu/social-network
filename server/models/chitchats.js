var mongoose = require('mongoose');

module.exports = mongoose.model('Chitchat', {
    user: String,
    userId: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
})