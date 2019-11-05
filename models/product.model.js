var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var productSchema = new mongoose.Schema({
    name: String,
    price: String,
    status: Boolean
})

var Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product