import {types} from "../types/types";

const initialState = {
  tasks: [],
  activeTask: null
}

export const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.taskAddNew:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }

    case types.taskUpdate:
      return {
        ...state,
        tasks: state.tasks.map(
          t => (t._id === action.payload._id) ? action.payload : t
        )
      }

    case types.taskDelete:
      return {
        ...state,
        tasks: state.tasks.filter(
          t => (t._id !== action.payload._id)
        )
      }

    case types.taskLoaded:
      return {
        ...state,
        tasks: action.payload
      }

    case types.taskLogout:
      return {
        ...initialState
      }
    default:
      return state
  }
}