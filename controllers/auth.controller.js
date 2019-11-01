// var db = require('../db')
var md5 = require('md5')
var User = require('../models/user.model')
var Session = require('../models/session.model')

module.exports.login = (req, res) => res.render('auth/login')

module.exports.postLogin = async (req, res) => {
    var email = req.body.email
    var password = req.body.password
    // var user = db.get('users').find({ email: email }).value()
    var user = await User.find({ email: email })

    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exists.'
            ],
            values: req.body
        })
        return
    }

    var hashedPassword = md5(password)
    if (user[0].password !== hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            values: req.body
        })
        return
    }
    await Session.updateOne({ cart: 0 })
    res.cookie('userId', user.id, { signed: true })
    res.redirect('/users')
}