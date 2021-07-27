const {response} = require('express')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const Task = require('../models/Task')

/*
    This middleware prevents an unidentified user with an invalid x-token from accessing the endpoint.
    Does not identify the different roles!!
    ---
    @param  {Request}       req     Request
    @param  {Response}      res     Response
    @param  {func}          next    Next
    @return {Response?}             Unauthorised response if the user does not have a valid token
 */
const validateJWT = (req, res = response, next) => {
  // Get the JWT in header x-token
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'There is not a token in the request'
    })
  }

  try {
    const {uid, name, email, premium} = jwt.verify(token, process.env.SECRET_JWT_SEED)

    req.uid = uid
    req.name = name
    req.email = email
    req.premium = premium

  } catch (e) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token'
    })
  }

  next()
}

const validateNumberOfTasks = async (req, res = response, next) => {
  // Get the JWT in header x-token
  const token = req.header('x-token')
  try {
    const {uid} = jwt.verify(token, process.env.SECRET_JWT_SEED)
    const user = await User.findById(uid)
    if (!user.premium) {
      const day = req.body.day
      const tasks = await Task.find({user: uid, day})
      console.log(tasks.length)
      if (tasks.length >= process.env.MAX_TASKS_FREE_TIER) {
        return res.status(401).json({
          ok: false,
          msg: `Upgrade to premium tier to add more than ${process.env.MAX_TASKS_FREE_TIER} tasks in a day.`
        })
      }
    }
  } catch (e) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token'
    })
  }

  next()
}

module.exports = {
  validateJWT,
  validateNumberOfTasks
}