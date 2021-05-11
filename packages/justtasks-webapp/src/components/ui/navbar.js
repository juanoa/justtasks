import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";

export const Navbar = () => {

  const {name, email} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">JustTasks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                {name} ({email})
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/">Configuration</Link></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a className="dropdown-item text-danger" onClick={handleLogout} >Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}