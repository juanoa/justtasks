import {types} from "../types/types";
import moment from "moment";

const initialState = {
  tasks: [
    {id: "1", title: 'Nota 1', day: moment().format("DDMMYYYY"), completed: false},
    {id: "2", title: 'Nota 2.1', day: moment().add(1, "days").format("DDMMYYYY"), completed: true},
    {id: "3", title: 'Nota 2.2', day: moment().add(1, "days").format("DDMMYYYY"), completed: false},
    {id: "4", title: 'Nota 2.3', day: moment().add(1, "days").format("DDMMYYYY"), completed: false},
    {id: "5", title: 'Nota 3', day: moment().add(2, "days").format("DDMMYYYY"), completed: false},
    {id: "6", title: 'Nota 4', day: moment().add(3, "days").format("DDMMYYYY"), completed: false},
    {id: "7", title: 'Nota 5', day: moment().add(4, "days").format("DDMMYYYY"), completed: false},
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

    case types.taskUpdate:
      return {
        ...state,
        tasks: state.tasks.map(
          t => (t.id === action.payload.id) ? action.payload : t
        )
      }

    case types.taskDelete:
      return {
        ...state,
        tasks: state.tasks.filter(
          t => (t.id !== action.payload.id)
        )
      }
    default:
      return state
  }
}