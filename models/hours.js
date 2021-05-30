// Model for happenings
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hoursSchema = new Schema({
  day: {
    type: String,
    enum: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
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

module.exports = mongoose.model('Hours', hoursSchema)
