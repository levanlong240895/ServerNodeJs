var Product = require('../../models/product.model')

// Product

module.exports.index = async (req, res) => {
    var products = await Product.find()
    res.json(products)
}

module.exports.create = async (req, res) => {
    let data = {
        name: req.body.name,
        price: req.body.price,
        status: req.body.status ? req.body.status : false,
    }
    var product = await Product.insertMany(data)
    res.json(product)
}

module.exports.getProductById = async (req, res) => {
    var id = req.body.id
    var product = await Product.find({ _id: id })
    res.json(product)
}

module.exports.updateProductById = async (req, res) => {
    var product = req.body
    var update = await Product.find({ _id: product.id }).update(product)
    res.json(update)
}

module.exports.deleteProductById = async (req, res) => {
    var id = req.body.id
    var del = await Product.findOneAndRemove({ _id: id }, { useFindAndModify: false })
    res.json(del)
}

// Shipping





