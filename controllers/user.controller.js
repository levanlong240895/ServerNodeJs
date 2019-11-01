var db = require('../db')
var User = require('../models/user.model')
const shortid = require('shortid')

module.exports.index = async (req, res) => {
    var users = await User.find()
    res.render('users/index', {
        users: users
    })
}

module.exports.search = async (req, res) => {
    var q = req.query.q
    // var users = db.get('users').value()
    var users = await User.find()
    var matchedUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('users/index', {
        users: matchedUsers
    })
}

module.exports.createGet = (req, res) => {
    res.render('users/create')
}

module.exports.users = async (req, res) => {
    var id = req.params.id
    var user = await User.find({ id: id })
    // var user = db.get('users').find({ id: id }).value()
    res.render('users/view', {
        user: user
    })
}

module.exports.createPost = (req, res) => {
    req.body.id = shortid.generate()
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    User.insertMany(req.body, {
        ordered: true
    })
    // db.get('users').push(req.body).write()
    res.redirect('/')
}

module.exports.setttttttCookie = (req, res) => {
    res.cookie('user-id', 12345)
    res.send('Hello')
}