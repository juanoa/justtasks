import Swal from 'sweetalert2'

import {types} from "../types/types";
import {fetchWithToken, fetchWithoutToken} from "../helpers/fetch";
import {taskLogout} from "./tasks";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchWithoutToken('auth', {email, password}, 'POST')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email
      }))
    } else {
      Swal.fire('Error', 'Email or password are wrong', 'error')
    }
  }
}

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const res = await fetchWithoutToken('auth/new', {name, email, password}, 'POST')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email
      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
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
        email: body.user.email
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
    const res = await fetchWithToken('auth/renew')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({
        uid: body.user.id,
        name: body.user.name,
        email: body.user.email
      }))
    } else {
      dispatch(checkingFinish())
    }
  }
}

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
    dispatch(taskLogout())
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

const checkingFinish = () => ({
  type: types.authCheckingFinish
})

const logout = () => ({
  type: types.authLogout
})