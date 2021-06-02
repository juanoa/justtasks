import React from 'react'
import {Link} from 'react-router-dom'
import LogoLight from "../../img/just-tasks-logo-light.png";

export const HomeSection = () => {

  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-dark text-white">
      <div className="col-md-8 p-lg-5 mx-auto my-5">
        <img
          src={LogoLight}
          alt="logo"
          height={75}
          className="mb-5"
        />
        <h1>It's simple, it's easy, It's JustTasks</h1>
        <p className="lead fw-normal mt-4">
          No projects, no labels, no priorities, no teams, only tasks
        </p>
        <Link to="/register" className="btn btn-lg btn-danger mt-5">Register now</Link> <Link to="/login" className="btn btn-lg btn-outline-danger mt-5">Login</Link>
        <p className="font-monospace mt-2"><small>(free forever)</small></p>
      </div>
    </div>
  )
}