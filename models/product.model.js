var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product