const express = require('express')
const connectDB = require('./data/db')

const app = express()

app.use(express.json())

connectDB()

app.listen(3000)

module.exports = app
