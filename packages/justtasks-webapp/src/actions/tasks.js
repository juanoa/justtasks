import Swal from "sweetalert2";

import {types} from "../types/types";
import {fetchWithToken} from "../helpers/fetch";

export const taskStartLoading = () => {
  return async (dispatch) => {

    try {
      const resp = await fetchWithToken('tasks');
      const body = await resp.json()

      const tasks = body.tasks

      dispatch(eventLoaded(tasks))
    } catch (e) {
      console.log(e)
    }
  }
}

const eventLoaded = (task) => ({
  type: types.taskLoaded,
  payload: task
})

export const taskStartAddNew = (title, day) => {
  return async (dispatch) => {
    try {
      const task = {
        title,
        day,
        completed: false
      }
      const respuesta = await fetchWithToken('tasks', task, 'POST')
      const body = await respuesta.json()

      if (body.ok) {
        task._id = body.task._id
        task.index = body.task.index
        dispatch(taskAddNew(task))
      } else {
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (e) {
      console.log(e)
    }

  }
}

const taskAddNew = (task) => ({
  type: types.taskAddNew,
  payload: task
})

export const taskStartUpdateDayFromDrag = (id, day) => {
  return async (dispatch, getState) => {
    const {tasks} = getState().tasks
    const task = tasks.find(t => t._id === id)
    const oldDay = task.day
    task.day = day
    dispatch(taskUpdate(task))

    try {
      const resp = await fetchWithToken(`tasks/${id}`, task, 'PUT')
      const body = await resp.json()

      if (!body.ok) {
        task.day = oldDay
        dispatch(taskUpdate(task))
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const startTaskUpdate = (task) => {
  return async (dispatch, getState) => {
    const {tasks} = getState().tasks
    const oldTask = tasks.find(t => t._id === task._id)

    dispatch(taskUpdate(task))
    try {
      const resp = await fetchWithToken(`tasks/${task._id}`, task, 'PUT')
      const body = await resp.json()


      if (!body.ok) {
        dispatch(taskUpdate(oldTask))
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const taskUpdate = (task) => ({
  type: types.taskUpdate,
  payload: task
})

export const taskStartDelete = (id) => {
  return async (dispatch, getState) => {
    const {tasks} = getState().tasks
    const task = tasks.find(t => t._id === id)
    dispatch(taskDelete(task))

    try {
      const resp = await fetchWithToken(`tasks/${id}`, {}, 'DELETE')
      const body = await resp.json()

      if (!body.ok) {
        dispatch(taskAddNew(task))
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const taskDelete = (task) => ({
  type: types.taskDelete,
  payload: task
})

export const taskSetActive = (task) => ({
  type: types.taskSetActive,
  payload: task
})

export const taskClearActive = () => ({
  type: types.taskClearActive
})


export const taskLogout = () => ({
  type: types.taskLogout
})