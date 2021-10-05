const Task = require('../models/Task')
const moment = require('moment')
const {getNewIndexFromUserAndDate} = require("./indexes");

const reorganizeByUser = async (uid, clientDateString) => {
  const clientDate = moment(clientDateString).format('YYYYMMDD')
  // Get previous user uncompleted tasks
  const tasks = await Task.find({user: uid, completed: false, day: {$lt: clientDate}})
  for (const task of tasks) {
    // Put the client's current day
    task.day = clientDate
    // Get new index for the new date
    task.index = await getNewIndexFromUserAndDate(uid, clientDate)
    await Task.findByIdAndUpdate(task.id, task)
  }
}

module.exports = {
  reorganizeByUser
}