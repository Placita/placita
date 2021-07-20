// Model for MenuItems
const { Schema, model } = require('mongoose')

const menuItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      enum: ['BRUNCH', 'DINNER', 'DESSERT', 'DRINKS'],
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
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('MenuItem', menuItemSchema)
