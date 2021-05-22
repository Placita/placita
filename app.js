const express = require('express')
const connectDB = require('./data/db')

const app = express()

app.use(express.json())

// Connect to Mongoose database. Connection code in data/db.js
connectDB()

app.listen(3000)

module.exports = app
