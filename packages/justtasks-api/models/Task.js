const {Schema, model} = require('mongoose')

const TaskSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
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

module.exports = model('Task', UserSchema)