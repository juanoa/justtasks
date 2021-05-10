/*
    User/auth routes
    host + /api/auth
*/

const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')

const {
    revalidateToken,
    login,
    register,
    updateUser,
    deleteUser
} = require('../controllers/auth')

const {validateJWT} = require('../middlewares/validatePermissions')

/*
    RENEW JWT
    ---------
    Revalidate JWT of the user to which the JWT in the request header belongs.
 */
router.get(
    '/renew',
    [
        validateJWT
    ],
    revalidateToken
)

/*
    LOGIN
 */
router.post(
    '/',
    [

    ],
    login
)

/*
    REGISTER
 */
router.post(
    '/new',
    [

    ],
    register
)

/*
    UPDATE USER
 */
router.put(
    '/:id',
    [
        validateJWT,
    ],
    updateUser
)

/*
    DELETE USER
 */
router.delete('/:id',
    [
        validateJWT,
    ],
    deleteUser)

module.exports = router