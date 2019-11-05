var express = require('express')

var router = express.Router()

var controller = require('../controllers/shipping.controller')

// product

router.get('/', controller.getAllShippings)
router.post('/add', controller.addShipping)
router.post('/getShinngById', controller.getShinngById)
router.post('/updateShipping', controller.updateShipping)

module.exports = router