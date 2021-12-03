import {types} from "../types/types";

export const startLoading = () => ({
  type: types.uiStartLoading
})

export const finishLoading = () => ({
  type: types.uiFinishLoading
})