// Model for Admins
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  encryptedPassword: {
    type: String,
    required: true
  },
  role: { type: String, enum: ['admin', 'employee'], required: true }
})

module.exports = mongoose.model('Admin', adminSchema)
