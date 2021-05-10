import {types} from "../types/types";

const initialState = {
  tasks: [
    {title: 'Nota 1', day: '10052021'},
    {title: 'Nota 2', day: '11052021'},
    {title: 'Nota 3', day: '12052021'},
    {title: 'Nota 4', day: '13052021'},
    {title: 'Nota 5', day: '14052021'},
  ],
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
    default:
      return state
  }
}