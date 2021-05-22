const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')

const connectDB = require('./data/db')

const app = express()

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, '/views/layouts/'),
  partialsDir: path.join(__dirname, '/views/partials/'),
  extname: 'hbs',
  defaultLayout: 'base'
}))

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('home')
})

// Connect to Mongoose database. Connection code in data/db.js
connectDB()

app.listen(3000)

module.exports = app
