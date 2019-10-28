var express = require('express')
var router = express.Router()
var controller = require('../controllers/user.controller')

router.get('/search', controller.search)

router.get('/create', controller.createGet)

router.get('/:id', controller.users)

router.post('/create', controller.createPost)

router.get('/', controller.index)

router.get('/coo', controller.createGet)


module.exports = router