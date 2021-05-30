// Model for Menu
const { Schema, model } = require('mongoose')

const menuSchema = new Schema({
  name: {
    type: String,
    enum: ['BRUNCH', 'DINNER', 'DESSERT', 'DRINKS'],
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItem',
      required: false
    }
  ]
}, { timestamps: true })

module.exports = model('Menu', menuSchema)
