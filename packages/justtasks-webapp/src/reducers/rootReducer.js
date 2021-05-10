import {combineReducers} from "redux";

import {TasksReducer} from "./tasksReducer";

export const rootReducer = combineReducers({
  tasks: TasksReducer,
})