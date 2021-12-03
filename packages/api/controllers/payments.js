const {response} = require('express')
const stripe = require('stripe')(process.env.STRIPE_KEY)

const {checkIfCustomerExistsOrCreate} = require('../helpers/stripe')

const createPaymentIntent = async (req, res = response) => {
  const customer = await checkIfCustomerExistsOrCreate(req.email, req.name, req.uid)
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 499,
    currency: "usd",
    customer: customer.id
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
}

module.exports = {
  createPaymentIntent
}