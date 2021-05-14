import React from 'react'

import OpenSource from "./img/openSource.svg"

export const OpenSourceSection = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 bg-dark text-light" id="opensource">
      <div className="col-md-10 pt-lg-5 pb-lg-5 mx-auto">
        <div className="row">
          <div className="col-md-6">
            <h2>Open Source</h2>
            <p>JustTasks is OpenSource. Feel free to contribute or open a new issue if you find a bug.</p>
            <a href="https://github.com/juanoa/justtasks" className="btn btn-outline-danger mt-3">
              <i className="bi bi-github" /> GitHub
            </a>
          </div>
          <div className="col-md-6">
            <img
              src={OpenSource}
              className="w-100"
              alt="Open Source"
            />
          </div>
        </div>
      </div>
    </div>
  )
}