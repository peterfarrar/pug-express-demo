const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const session = require('express-session')
const cors = require('cors')
const { port, corsOptions, sessionSecret } = require('../options')
const routes = require('./routes/index')

const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: sessionSecret
}))

app.get('/ping', (req, res) => {
  res.send("pong")
})

app.use('/menu', routes.menu)
const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

module.exports = server