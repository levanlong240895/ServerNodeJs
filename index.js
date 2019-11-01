// console.log(process.env)
require('dotenv').config()
// console.log(process.env.SESSION_SECRET)
const express = require('express')
const app = express()
const port = 3000
var csurf = require('csurf')
// setup route middlewares
// var csrfProtection = csrf({ cookie: true })
var mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.MONGO_URL,  { useNewUrlParser: true })
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var userRoutes = require('./routes/user.route')
var authRoutes = require('./routes/auth.route')
var productRoutes = require('./routes/product.route')
var cartRoutes = require('./routes/cart.route')
var transferRoutes = require('./routes/transfer.route')

var authMiddleware = require('./middlewares/auth.middleware')
var sessionMiddleware = require('./middlewares/session.middleware')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('testSignedCookie'))
app.use(sessionMiddleware)
// app.use(csurf({ cookie: true }))

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index', {
    name: 'LONG'
}))

app.use('/users', authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)
app.use('/transfer', authMiddleware.requireAuth, transferRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))