var express = require('express')
var router = express.Router()
var controller = require('../controllers/auth.controller')

router.get('/login', controller.login)
router.post('/login', controller.postLogin)

console.log('aaaaaaaaaaaaaaaa')

module.exports = router