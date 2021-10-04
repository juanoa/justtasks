import {types} from "../types/types";

const initialState = {
  loading: false
}

export const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        loading: true
      }
    case types.uiFinishLoading:
      return {
        loading: false
      }
    default:
      return state
  }
}