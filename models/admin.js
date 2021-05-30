// Model for Admins
const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  encryptedPassword: {
    type: String,
    required: true
  },
  role: { type: String, enum: ['admin', 'restrictedadmin'], required: true }
})

module.exports = model('Admin', adminSchema)
