var Product = require('../models/product.model')

// var db = require('../db')

module.exports.index = async (req, res) => {
    var products = await Product.find()
    res.render('products/index', {
        products: products
    })
}


