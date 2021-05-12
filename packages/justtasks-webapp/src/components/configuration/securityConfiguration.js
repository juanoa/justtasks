import React from 'react'

export const SecurityConfiguration = () => {
  return (
    <div className="bg-light rounded p-5 mb-5">
      <h2>Change password</h2>
      <form className="mt-4">
        <div className="form-group mb-3">
          <label>Current password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>
        <div className="form-group mb-3">
          <label>New password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>
        <div className="form-group mb-3">
          <label>Repeat password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>
        <button className="btn btn-danger">
          Change
        </button>
      </form>
    </div>
  )
}