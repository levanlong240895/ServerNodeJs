var Shippping = require('../../models/shipping.model')


module.exports.getAllShippings = async (req, res) => {
    var shipings = await Shippping.find()
    res.json(shipings)
}

module.exports.addShipping = async (req, res) => {
    var shiping = await Shippping.insertMany(req.body)
    res.json(shiping)
}

module.exports.getShinngById = async (req, res) => {
    var shiping = await Shippping.find({ _id: req.body.id })
    res.json(shiping)
}

module.exports.updateShipping = async (req, res) => {
    var shipping = req.body
    var id = req.body.id
    delete shipping.id
    var update = await Shippping.update({ _id: id }, shipping)
    res.json(update)
}