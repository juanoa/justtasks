import Swal from 'sweetalert2'

import {types} from "../types/types";
import {fetchWithToken, fetchWithoutToken} from "../helpers/fetch";
import {taskLogout} from "./tasks";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const respuesta = await fetchWithoutToken('auth', {email, password}, 'POST')
    const body = await respuesta.json()

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
    const respuesta = await fetchWithoutToken('auth/new', {name, email, password}, 'POST')
    const body = await respuesta.json()

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


export const startChecking = () => {
  return async (dispatch) => {
    const respuesta = await fetchWithToken('auth/renew')
    const body = await respuesta.json()

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

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

const checkingFinish = () => ({
  type: types.authCheckingFinish
})

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
    dispatch(taskLogout())
  }
}

const logout = () => ({
  type: types.authLogout
})