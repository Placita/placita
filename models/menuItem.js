// Model for MenuItems
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: [
    {
      type: String,
      required: true
    }
  ],
  price: {
    type: Number,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('MenuItem', menuItemSchema)
