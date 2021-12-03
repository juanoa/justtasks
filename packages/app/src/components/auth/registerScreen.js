import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";

import './style.css'
import {useForm} from "../../hooks/useForm";
import {startRegister} from "../../actions/auth";
import {Seo} from "../seo";
import Icon from "../../img/just-tasks-icon.png";

export const RegisterScreen = () => {

  const dispatch = useDispatch()

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let emailParams = params.get('email') || '';

  const [formValues, handleInputChange] = useForm({
    email: emailParams,
    password: '',
    name: ''
  });

  const {email, password, name} = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      Swal.fire('Weak password', 'The password must be at least 6 characters long', 'error')
    } else {
      dispatch(startRegister(email, password, name))
    }
  }

  return (
    <>
      <Seo title="Sign up | JustTasks" />
      <div className="form-background">
        <form className="form-signin" onSubmit={handleRegister}>
          <div className="text-center mb-4">
            <img className="mb-4" src={Icon} alt="Icon"
                 width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
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
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Name"
              required
            />
            <label htmlFor="inputName">Name</label>
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
          <button className="btn btn btn-danger btn-block mt-3" type="submit">Sign up</button>
          <p className="text-center mt-3">
            <Link to="/login" className="form-link">Log in →</Link>
          </p>
        </form>
      </div>
    </>
  )
}