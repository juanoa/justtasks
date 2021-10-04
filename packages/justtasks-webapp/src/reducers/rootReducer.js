import {combineReducers} from "redux";

import {TasksReducer} from "./tasksReducer";
import {AuthReducer} from "./authReducer";
import {UiReducer} from "./uiReducer";

export const rootReducer = combineReducers({
  tasks: TasksReducer,
  auth: AuthReducer,
  ui: UiReducer
})