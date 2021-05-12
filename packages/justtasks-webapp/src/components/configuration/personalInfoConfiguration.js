import React from 'react'

export const PersonalInfoConfiguration = () => {
  return (
    <div className="bg-light rounded p-5 mb-5">
      <h2>Personal data</h2>
      <form className="mt-4">
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="John"
          />
        </div>
        <button className="btn btn-danger mt-3">
          Save
        </button>
      </form>
    </div>
  )
}