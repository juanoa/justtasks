import {types} from "../types/types";

const initialState = {
  checking: true
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false
      }
    case types.authUpdateUser:
      return {
        ...state,
        ...action.payload
      }
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      }
    case types.authLogout:
      return {
        checking: false
      }
    default:
      return state
  }
}