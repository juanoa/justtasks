const {response} = require('express')
const bcrypt = require('bcryptjs')
const moment = require('moment')

const {generateJWT} = require('../helpers/jwt')

const revalidateToken = async (req, res = response) => {
    return res.json({
        ok: true
    })
}

const login = async (req, res = response) => {
    return res.json({
        ok: true
    })
}

const register = async (req, res = response) => {
    return res.json({
        ok: true
    })
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