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
    enum: ['APPETIZERS', 'SALADS', 'TACOS', 'ENTREE', 'SIDES'],
    required: false
  },
  description: [
    {
      type: String,
      required: true
    }
  ],
  menu: {
    type: String,
    enum: ['BRUNCH', 'DINNER', 'DESSERT', 'DRINKS'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: false
  }
})

module.exports = mongoose.model('MenuItem', menuItemSchema)
