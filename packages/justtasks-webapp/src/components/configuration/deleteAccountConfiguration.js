import React from 'react'

export const DeleteAccountConfiguration = () => {
  return (
    <div className="bg-light border border-danger rounded p-5 mb-5">
      <h2>Delete account</h2>
      <p><span className="text-danger">Warning!</span> If you delete your account, all your tasks will be deleted. <b>This process cannot be undone!</b></p>
      <form>
        <div className="form-group">
          <label>Enter your email to confirm</label>
          <input
            type="name"
            className="form-control"
            placeholder="mail@domain.com"
          />
        </div>
        <button className="btn btn-danger mt-3">
          Delete account
        </button>
      </form>
    </div>
  )
}