const Task = require('../models/Task')

/*
  If it's the first task, return 0; else, return the next index available
 */
const getNewIndexFromUserAndDate = async (uid, date) => {
  const tasks = await Task.find({user: uid, day: date})
  return(tasks.length || 0)
}

module.exports = {
  getNewIndexFromUserAndDate
}