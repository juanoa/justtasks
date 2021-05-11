import {combineReducers} from "redux";

import {TasksReducer} from "./tasksReducer";
import {AuthReducer} from "./authReducer";

export const rootReducer = combineReducers({
  tasks: TasksReducer,
  auth: AuthReducer
})