var mongoose = require('mongoose')

// Schema : Khai bao cac field co trong collections

var shippingSchema = new mongoose.Schema({
    name_product: String,
    price: Number,
    shipPrice: Number,
    buy_date: String,
    customer_info: String,
    status: Boolean
})

var Shipping = mongoose.model('Shipping', shippingSchema, 'shippings')

module.exports = Shipping