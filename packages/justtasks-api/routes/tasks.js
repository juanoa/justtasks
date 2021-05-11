/*
    Tasks routes
    host + /v1/tasks
*/

const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/tasks')

const {validateJWT} = require('../middlewares/validatePermissions')
const {validateParameters} = require("../middlewares/validateParameters");

/*
    GET TASKS
 */
router.get(
  '/',
  [
    validateJWT
  ],
  getTasks
)

/*
    CREATE TASK
 */
router.post(
  '/',
  [
    check('title', 'The title is mandatory').not().isEmpty(),
    check('day', 'The day is mandatory').not().isEmpty(),
    check('completed', 'The completed is mandatory').isBoolean(),
    validateParameters,
    validateJWT
  ],
  createTask
)

/*
    UPDATE TASK
 */
router.put(
  '/:id',
  [
    check('title', 'The title is mandatory').not().isEmpty(),
    check('day', 'The day is mandatory').not().isEmpty(),
    check('completed', 'The completed is mandatory').isBoolean(),
    validateParameters,
    validateJWT
  ],
  updateTask
)

/*
    UPDATE TASK
 */
router.delete(
  '/:id',
  [
    validateJWT
  ],
  deleteTask
)

module.exports = router