const Task = require('../models/Task')

const getNewIndexFromUserAndDate = async (uid, date) => {
  const tasks = await Task.find({user: uid, day: date})
  return(tasks.length || 0)
}

module.exports = {
  getNewIndexFromUserAndDate
}