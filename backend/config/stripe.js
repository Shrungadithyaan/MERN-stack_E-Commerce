const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
// const User = require('../models/user')

module.exports = stripe