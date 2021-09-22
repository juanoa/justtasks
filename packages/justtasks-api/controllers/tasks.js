const {response} = require('express')

const Task = require('../models/Task')
const {reorganizeByUser} = require('../helpers/reorganize')
const {getNewIndexFromUserAndDate} = require('../helpers/indexes')

const getTasks = async (req, res = response) => {
  const {uid, premium, query} = req
  try {
    delete query.user
    const filter = {
      user: uid,
      ...query
    }
    
    if (premium) {
      await reorganizeByUser(uid, req.header('client-datetime'))
    }
    
    const tasks = await Task.find(filter);

    return res.json({
      ok: true,
      tasks
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      ok: false,
      msg: 'Talk with the administrator'
    })
  }
}

const createTask = async (req, res = response) => {
  const {uid} = req

  try {
    const task = new Task(req.body)
    task.user = uid

    // Get the last Task index and add it
    task.index = await getNewIndexFromUserAndDate(uid, req.body.day)

    const savedTask = await task.save()

    return res.json({
      ok: true,
      task: savedTask
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      ok: false,
      msg: 'Talk with the administrator'
    })
  }
}

const updateTask = async (req, res = response) => {
  const {uid} = req
  const taskId = req.params.id

  try {
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: 'The task does not exist'
      })
    }

    if (task.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'You can not update this task'
      })
    }

    const newTask = {
      ...req.body,
      user: uid
    }

    const updatedTask = await Task.findByIdAndUpdate(task, newTask, {new: true})

    return res.json({
      ok: true,
      task: updatedTask
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      ok: false,
      msg: 'Talk with the administrator'
    })
  }
}

const deleteTask = async (req, res = response) => {
  const {uid} = req
  const taskId = req.params.id

  try {
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: 'The task does not exist'
      })
    }

    if (task.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'You can not update this task'
      })
    }

    await Task.findByIdAndDelete(taskId)

    return res.json({
      ok: true
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      ok: false,
      msg: 'Talk with the administrator'
    })
  }
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
}