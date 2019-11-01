var express = require('express')
var router = express.Router()
var controller = require('../controllers/user.controller')
// var authMiddleware = require('../middlewares/auth.middleware')
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })

router.get('/search', controller.search)

router.get('/cookie', controller.setttttttCookie)

router.get('/create', controller.createGet)

router.get('/:id', controller.users)

router.post('/create', upload.single('avatar'), controller.createPost)

router.get('/', controller.index)

module.exports = router