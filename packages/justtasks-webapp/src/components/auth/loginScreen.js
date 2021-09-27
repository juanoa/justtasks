import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './style.css'
import {useForm} from "../../hooks/useForm";
import {startLogin} from "../../actions/auth";
import {Seo} from "../seo";
import Icon from '../../img/just-tasks-icon.png'

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
      <div className="form-background">
        <form className="form-signin" onSubmit={handleLogin}>
          <div className="text-center mb-4">
            <img className="mb-4" src={Icon} alt="Icon"
                 width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
          </div>

          <div className="form-label-group">
            <input
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email</label>
          </div>

          <div className="form-label-group">
            <input
              name="password"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button className="btn btn btn-danger btn-block mt-3" type="submit">Log in</button>
          <p className="text-center mt-3">
            <Link to="/register" className="form-link">Create an Account →</Link>
          </p>
        </form>
      </div>
    </>
  )
}