const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const session = require('express-session')
const cors = require('cors')
const { port, corsOptions, sessionSecret } = require('../options')
const routes = require('./routes/index')
const path = require('node:path')

const app = express()
app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: sessionSecret
}))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/ping', (req, res) => {
  res.send("pong")
})

app.use('/menu', routes.menu)
app.use('/', routes.html)
// app.use('/', (req, res) => {
//   res.render('index', { message: "Hello" })
// })

const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})


module.exports = server