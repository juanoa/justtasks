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
    case types.taskUndoUpdate:
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

    case types.taskSetActive:
      return {
        ...state,
        activeTask: action.payload
      }

    case types.taskClearActive:
      return {
        ...state,
        activeTask: null
      }

    default:
      return state
  }
}