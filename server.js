const express = require('express')
const path = require('path')
var compression = require('compression')
var favicon = require('serve-favicon')
var morgan = require('morgan')
const app = express()

const ONE_HOUR = 60 * 60

morgan('tiny')
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')))
app.use(compression())
app.use(express.static('dist'))

app.use(
  express.static('public', {
    maxAge: ONE_HOUR,
  })
)
app.use(
  express.static('dist', {
    maxAge: ONE_HOUR,
  })
)

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log('Server started:', ` - PORT: ${port}`, ` - Env: ${process.env.ENV}`)
})
