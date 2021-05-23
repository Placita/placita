const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const handlebars = require('express-handlebars')
const { adminBro, adminRouter } = require('./utils/admin')
const AdminBro = require('admin-bro')

// Require database configuration
const connectDB = require('./data/db')

const handlebarsHelpers = require('./handlebars/helpers')

// Import route files
const mainRoutes = require('./routes/main')
const happeningsRoutes = require('./routes/happenings')
const menuRoutes = require('./routes/menu')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('@admin-bro/mongoose'))

const app = express()

// Initialize and configure handlebars
app.set('view engine', 'hbs')
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    defaultLayout: 'base',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname, '/views/partials/'),
    helpers: handlebarsHelpers.helpers
  })
)

// Initialize public path, set express.json, urlencoded
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(mainRoutes)
app.use('/happenings', happeningsRoutes)
app.use('/menus', menuRoutes)
app.use(adminBro.options.rootPath, adminRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connectDB()
const run = async () => {
  // Connect to Mongoose database. Connection code in data/db.js
  await connectDB()
  await app.listen(3000)
}
// app.listen(3000)

run()

module.exports = app
