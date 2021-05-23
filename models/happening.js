// Model for happenings
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const happeningsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Happenings', happeningsSchema)
