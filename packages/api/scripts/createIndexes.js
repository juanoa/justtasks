const Task = require('../models/Task');
const User = require('../models/User');
const {dbConnection} = require('../config/database');


(async () => {
  dbConnection()
  const users = await User.find()
  for (const user of users) {
    console.log('-' + user.name + '-')
    const tasks = await Task.find({user: user._id})
    let groups = tasks.reduce((r, a) => {
      r[a.day] = [...r[a.day] || [], a];
      return r;
    }, {});
    for (const group in groups) {
      let selectedGroup = groups[group]
      let i = 0
      for (const task of selectedGroup) {
        task.index = i
        console.log(task)
        await Task.findByIdAndUpdate(task, task, {new: true})
        i++
      }
    }
  }
})();
