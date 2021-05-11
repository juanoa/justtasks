import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './style.css'
import {useForm} from "../../hooks/useForm";
import {startRegister} from "../../actions/auth";

export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
    name: ''
  });

  const {email, password, name} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startRegister(email, password, name))
  }

  return (
    <div className="auth-form shadow">
      <h2 className="text-center mb-3">Register</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </div>
      </form>
      <p className="text-center mt-3">
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  )
}