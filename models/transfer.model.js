var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var transferSchema = new mongoose.Schema({
    accountId: String,
    userId: String,
    amount: Number
})

var Transfer = mongoose.model('Transfer', transferSchema, 'transfers')

module.exports = Transfer