var db = require('../db')
const shortid = require('shortid');

module.exports.index = (req, res) => res.render('users/index', {
    users: db.get('users').value()
})

module.exports.search = (req, res) => {
    var q = req.query.q
    console.log("q", q)
    var users = db.get('users').value()
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

module.exports.users = (req, res) => {
    var id = req.params.id
    var user = db.get('users').find({ id: id }).value()
    res.render('users/view', {
        user: user
    })
}

module.exports.createPost = (req, res) => {
    req.body.id = shortid.generate()
    db.get('users').push(req.body).write()
    res.redirect('/')
}

module.exports.setttttttCookie = (req, res) => {
    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
    res.send('Hello')
}