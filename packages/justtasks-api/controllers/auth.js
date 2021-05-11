const {response} = require('express')
const bcrypt = require('bcryptjs')

const {generateJWT} = require('../helpers/jwt')
const User = require('../models/User')

const revalidateToken = async (req, res = response) => {
  const {uid, name, email} = req

  // Generar un nuevo JWT
  const token = await generateJWT(uid, name, email)

  return res.json({
    ok: true,
    user: {
      id: uid,
      name,
      email
    },
    token
  })
}

const login = async (req, res = response) => {
  const {email, password} = req.body

  try {
    let user = await User.findOne({email})

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: 'User does not exist or password are invalid'
      })
    }

    //Confirm pass
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: 'User does not exist or password are invalid'
      })
    }

    const token = await generateJWT(user.id, user.name, user.email)

    return res.status(201).json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      ok: false,
      msg: 'Talk with the admin'
    })
  }
}

const register = async (req, res = response) => {
  const {email, password} = req.body

  try {
    let user = await User.findOne({email})

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'The user already exists with that email'
      })
    }

    user = new User(req.body);

    // Crypt contraseña
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    const token = await generateJWT(user.id, user.name, user.email)

    return res.status(201).json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      ok: false,
      msg: 'Talk with the admin'
    })
  }
}

const updateUser = async (req, res = response) => {
  return res.json({
    ok: true
  })
}

const deleteUser = async (req, res = response) => {
  return res.json({
    ok: true
  })
}

module.exports = {
  revalidateToken,
  login,
  register,
  updateUser,
  deleteUser
}