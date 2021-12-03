const stripe = require('stripe')(process.env.STRIPE_KEY);
const User = require('../models/User')

const checkIfCustomerExistsOrCreate = async (email, name, userId) => {
  const user = await User.findById(userId)
  if (user.stripeUserId) {
    return await stripe.customers.retrieve(
      user.stripeUserId
    );
  }
  return await createStripeCustomerAndUpdateUser(email, name, userId)
}

const createStripeCustomerAndUpdateUser = async (email, name, userId) => {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      description: 'Customer created from JustTask API Helper'
    })

    await User.findByIdAndUpdate(userId, {stripeUserId: customer.id},{new: true})
    return customer
  } catch (e) {
    return null;
  }

}

module.exports = {
  createStripeCustomerAndUpdateUser,
  checkIfCustomerExistsOrCreate
}