const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const handlebars = require('express-handlebars')

// Require database configuration
const connectDB = require('./data/db')

// Import route files
const mainRoutes = require('./routes/main')
const happeningsRoutes = require('./routes/happenings')
const menuRoutes = require('./routes/menu')

const app = express()

// Initialize and configure handlebars
app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, '/views/layouts/'),
  partialsDir: path.join(__dirname, '/views/partials/'),
  extname: 'hbs',
  defaultLayout: 'base'
}))

// Initialize public path, set express.json, urlencoded
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(mainRoutes)
app.use('/happenings', happeningsRoutes)
app.use('/menus', menuRoutes)

// Connect to Mongoose database. Connection code in data/db.js
connectDB()

app.listen(3000)

module.exports = app
