import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">JustTasks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#opensource">Open Source</a>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/register" className="btn btn-danger me-2" type="button">Sign up</Link>
            <Link to="/login" className="btn btn-outline-danger me-2" type="button">Log in</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}