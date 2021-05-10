const jwt = require('jsonwebtoken')

/*
    This function generate a valid JWT for a user.
    ---
    @param  {ObjectId}  id          ID of the user
    @param  {String}    username    Username of the user
    @return {String}                Valid token
 */
const generateJWT = (id, username) => {
    return new Promise((resolve, reject) => {
        const payload = {
            id,
            username
        }

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (e, token) => {
            if (e) {
                console.log(e)
                reject('Failed to generate token')
            }
            resolve(token)
        })
    })
}

module.exports = {
    generateJWT
}