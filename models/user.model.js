var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var userSchema = new mongoose.Schema({
    email: String,
    password:  String,
    name: String,
    avartar: String,
    phone: String
})

var User = mongoose.model('User', userSchema, 'users')

module.exports = User