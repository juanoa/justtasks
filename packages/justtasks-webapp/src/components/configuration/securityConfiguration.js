import React from 'react'
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";

import {useForm} from "../../hooks/useForm";
import {startUpdateUser} from "../../actions/auth";

export const SecurityConfiguration = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    password: '',
    password2: ''
  });

  const {password, password2} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6 || password2.length < 6) {
      return Swal.fire('Weak password', 'The password must be at least 6 characters long', 'error')
    }
    if (password !== password2) {
      return Swal.fire('Error', 'Both passwords must be the same', 'error')
    }

    dispatch(startUpdateUser({password}))
  }

  return (
    <div className="bg-light rounded p-5 mb-5">
      <h2>Change password</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>New password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Repeat password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-danger">
          Change
        </button>
      </form>
    </div>
  )
}