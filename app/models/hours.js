// Model for hours
const { Schema, model } = require('mongoose')

const hoursSchema = new Schema({
  day: {
    type: String,
    enum: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    required: true
  },
  brunchOpen: {
    type: Number,
    required: false
  },
  brunchClose: {
    type: Number,
    required: false
  },
  dinnerOpen: {
    type: Number,
    required: false
  },
  dinnerClose: {
    type: Number,
    required: false
  }
})

module.exports = model('Hours', hoursSchema)
