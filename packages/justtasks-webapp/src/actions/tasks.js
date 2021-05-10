import {types} from "../types/types";
import moment from "moment";

export const taskStartAddNew = (title, day) => {
  return (dispatch) => {
    const task = {
      id: moment().toString(),
      title,
      day,
      completed: false
    }
    dispatch(taskAddNew(task))
  }
}

const taskAddNew = (task) => ({
  type: types.taskAddNew,
  payload: task
})

export const taskStartUpdateDayFromDrag = (id, day) => {
  return (dispatch, getState) => {
    const {tasks} = getState().tasks
    const task = tasks.find(t => t.id === id)
    task.day = day
    dispatch(taskUpdate(task))
  }
}

export const startTaskUpdate = (task) => {
  return (dispatch) => {
    dispatch(taskUpdate(task))
  }
}

const taskUpdate = (task) => ({
  type: types.taskUpdate,
  payload: task
})

export const taskStartDeleteFromDrag = (id) => {
  return (dispatch, getState) => {
    const {tasks} = getState().tasks
    const task = tasks.find(t => t.id === id)
    dispatch(taskDelete(task))
  }
}

const taskDelete = (task) => ({
  type: types.taskDelete,
  payload: task
})