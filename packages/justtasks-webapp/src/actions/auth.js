import Swal from 'sweetalert2'

import {types} from "../types/types";
import {fetchWithToken, fetchWithoutToken} from "../helpers/fetch";
import {taskLogout} from "./tasks";
import {finishLoading, startLoading} from "./ui";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const res = await fetchWithoutToken('auth', {email, password}, 'POST')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email,
        premium: body.user.premium
      }))
    } else {
      Swal.fire('Error', 'Email or password are wrong', 'error')
    }
    dispatch(finishLoading())
  }
}

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const res = await fetchWithoutToken('auth/new', {name, email, password}, 'POST')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email,
        premium: body.user.premium
      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
    dispatch(finishLoading())
  }
}

export const startUpdateUser = ({...props}) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth
    const res = await fetchWithToken(`auth/${uid}`, props, 'PUT')
    const body = await res.json()

    if (body.ok) {
      dispatch(updateUser({
        uid: body.user._id,
        name: body.user.name,
        email: body.user.email,
        premium: body.user.premium
      }))
      Swal.fire('User updated', 'Configuration updated successfully', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startDeleteUser = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth
    const res = await fetchWithToken(`auth/${uid}`, {}, 'DELETE')
    const body = await res.json()

    if (body.ok) {
      localStorage.clear()
      dispatch(logout())
      dispatch(taskLogout())
      Swal.fire('User deleted', 'Your user and your tasks were deleted successfully', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startChecking = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    const res = await fetchWithToken('auth/renew')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email,
        premium: body.user.premium
      }))
    }
    dispatch(finishLoading())
  }
}

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
    dispatch(taskLogout())
    dispatch(finishLoading())
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

const updateUser = (user) => ({
  type: types.authUpdateUser,
  payload: user
})

const logout = () => ({
  type: types.authLogout
})