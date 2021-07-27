const {Schema, model} = require('mongoose')

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    premium: {
      type: Boolean,
      required: true,
      default: false
    },
    premiumSince: {
      type: Date,
    },
    stripeUserId: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', UserSchema)