var Shippping = require('../../models/shipping.model')


module.exports.getAllShippings = async (req, res) => {
    var shipings = await Shippping.find()
    res.json(shipings)
}

module.exports.addShipping = async (req, res) => {
    var shiping = await Shippping.insertMany(req.body)
    res.json(shiping)
}
