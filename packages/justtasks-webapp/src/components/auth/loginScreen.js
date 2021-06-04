import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './style.css'
import {useForm} from "../../hooks/useForm";
import {startLogin} from "../../actions/auth";
import {Seo} from "../seo";

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLogin(email, password))
  }

  return (
    <>
      <Seo title="Login | JustTasks" />
      <div className="auth-form rounded shadow">
        <h2 className="text-center mb-3">Log in</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group text-center mt-4">
            <button type="submit" className="btn btn-danger btn-block">Log in</button>
          </div>
        </form>
        <p className="text-center mt-3">
          <Link to="/register">Create an Account</Link>
        </p>
      </div>
    </>
  )
}