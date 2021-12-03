import {types} from "../types/types";

const initialState = {}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
      }
    case types.authUpdateUser:
      return {
        ...state,
        ...action.payload
      }
    case types.authLogout:
      return {}
    default:
      return state
  }
}