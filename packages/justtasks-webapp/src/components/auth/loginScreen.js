import React from 'react'
import {Link} from "react-router-dom";

import './style.css'
import {useForm} from "../../hooks/useForm";

export const LoginScreen = () => {

  const [formValues, handleInputChange] = useForm({
    email: 'juan@juanoa.com',
    password: '123456'
  });

  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className="auth-form shadow">
      <h2 className="text-center mb-3">Log in</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            name="email"
            className="form-control"
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
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
      </form>
      <p className="text-center mt-3">
        <Link to="/register">Create an Account</Link>
      </p>
    </div>
  )
}