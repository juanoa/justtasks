/*
    Payments routes
    host + /v1/payments
*/

const {Router} = require('express')
const router = Router()

const {
  createPaymentIntent,
} = require('../controllers/payments')

const {validateJWT} = require('../middlewares/validatePermissions')

router.post(
  '/create-payment-intent',
  [
    validateJWT
  ],
  createPaymentIntent
)

module.exports = router