
// var db = require('../db')
var Session = require('../models/session.model')

module.exports.addToCart = async (req, res, next) => {
    try {
        var productId = req.params.productId
        var sessionId = req.signedCookies.sessionId

        if (!sessionId) {
            res.redirect('products')
            return
        }

        var data = await Session.find()
        let count = data[0].cart ? data[0].cart : 0
        // await Session.find({sessionId: sessionId }).updateOne({ cart: count + 1 })
        await Session.updateOne({ cart: count + 1 })

        res.redirect('/products')
    } catch (error) {
        console.log(error)
    }

}