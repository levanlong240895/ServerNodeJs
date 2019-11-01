var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var sessionSchema = new mongoose.Schema({
    sessionId: String,
    cart: Number
})

var Session = mongoose.model('Session', sessionSchema, 'sessions')

module.exports = Session