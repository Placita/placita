// Model for happenings
const { Schema, model } = require('mongoose')

const happeningsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    dateTime: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Happenings', happeningsSchema)
