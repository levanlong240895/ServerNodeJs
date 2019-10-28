const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

var userRoutes = require('./routes/user.route')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index', {
    name: 'LONG'
}))

app.use('/users', userRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))