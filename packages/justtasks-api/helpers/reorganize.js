const Task = require('../models/Task')
const moment = require('moment')

const reorganizeByUser = async (uid, clientDateString) => {
  const clientDate = moment(clientDateString).format('YYYYMMDD')
  const tasks = await Task.find({user: uid, completed: false, day: {$lt: clientDate}})
  for (const task of tasks) {
    task.day = clientDate
    await Task.findByIdAndUpdate(task.id, task)
  }
}

module.exports = {
  reorganizeByUser
}