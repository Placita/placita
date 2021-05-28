// Model for Menu
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
  name: {
    type: String,
    enum: ['BRUNCH', 'DINNER', 'DESSERT', 'DRINKS']
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItems'
      required: false
    }
  ],
}, { timestamps: true })

module.exports = mongoose.model('Menu', menuSchema)
