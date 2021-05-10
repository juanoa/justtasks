import {types} from "../types/types";
import moment from "moment";

const initialState = {
  tasks: [
    {title: 'Nota 1', day: moment().format("DDMMYYYY"), completed: false},
    {title: 'Nota 2.1', day: moment().add(1, "days").format("DDMMYYYY"), completed: true},
    {title: 'Nota 2.2', day: moment().add(1, "days").format("DDMMYYYY"), completed: false},
    {title: 'Nota 2.3', day: moment().add(1, "days").format("DDMMYYYY"), completed: false},
    {title: 'Nota 3', day: moment().add(2, "days").format("DDMMYYYY"), completed: false},
    {title: 'Nota 4', day: moment().add(3, "days").format("DDMMYYYY"), completed: false},
    {title: 'Nota 5', day: moment().add(4, "days").format("DDMMYYYY"), completed: false},
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