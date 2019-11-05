var express = require('express')

var router = express.Router()

var controller = require('../controllers/product.controller')


// product

router.get('/', controller.index)

router.post('/create', controller.create)

router.post('/getProductById', controller.getProductById)

router.post('/updateProductById', controller.updateProductById)

router.post('/deleteProductById', controller.deleteProductById)

// shipping




module.exports = router