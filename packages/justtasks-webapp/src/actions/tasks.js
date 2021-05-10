import {types} from "../types/types";

export const taskStartAddNew = (title, day) => {
  return (dispatch) => {
    const task = {
      title,
      day
    }
    dispatch(taskAddNew(task))
  }
}

const taskAddNew = (task) => ({
  type: types.taskAddNew,
  payload: task
})