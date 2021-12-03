/*
    User/auth routes
    host + /v1/auth
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
const {validateParameters} = require("../middlewares/validateParameters");

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
      check('email', 'The email is mandatory').isEmail(),
      check('password', 'The password must have 6 characters or more').isLength({min: 6}),
      validateParameters
    ],
    login
)

/*
    REGISTER
 */
router.post(
    '/new',
    [
      check('name', 'The name is mandatory').not().isEmpty(),
      check('email', 'The email is mandatory').isEmail(),
      check('password', 'The password must have 6 characters or more').isLength({min: 6}),
      validateParameters
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