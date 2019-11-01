
var db = require('../db')
var shortid = require('shortid');
var Transfer = require('../models/transfer.model')


module.exports.create = (req, res, next) => {
    // res.render('transfer/create', { csrfToken: req.csrfToken() })
    res.render('transfer/create')
}


module.exports.postCreate = async (req, res, next) => {
    var data = {
        id: shortid.generate(),
        amount: parseInt(req.body.amount),
        accountId: req.body.accountId,
        userId: req.signedCookies.userId
    }
    // db.get('transfers').push(data).write()
    await Transfer.insertMany(data, {
        ordered: true
    })
    res.redirect('/transfer/create')
}