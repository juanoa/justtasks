const {response} = require('express')
const jwt = require('jsonwebtoken')

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
        const {id, username} = jwt.verify(token, process.env.SECRET_JWT_SEED)

        req.id = id
        req.username = username

    } catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        })
    }

    next()
}

module.exports = {
    validateJWT
}