// Path enables us to use our dir path easily
const path = require('path')
// Helmet sets HTTP headers for security
const helmet = require('helmet')
// Express spins up our web server
const express = require('express')
// Favicon to serve favicon icon
const favicon = require('serve-favicon')
// Handlebars is our templating engine
const handlebars = require('express-handlebars')
// AdminBro and adminRouter expose our easily spun-up admin dashboard & auth
const { adminBro, adminRouter } = require('./utils/admin')
const AdminBro = require('admin-bro')
// Express-session is required by csurf
const session = require('express-session')
// Csurf for CSRF protection
const csrf = require('csurf')

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

// Set helmet with our content security policy
app.use(helmet({
  contentSecurityPolicy: false
}))

// Initialize our session manager with options
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))

// Initialize and use our csrf middleware
app.use(csrf())

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

run()

module.exports = app
