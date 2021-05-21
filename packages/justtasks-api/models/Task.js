const {Schema, model} = require('mongoose')

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    day: {
      type: String
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('Task', TaskSchema)