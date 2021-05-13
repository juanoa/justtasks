import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";

import {useForm} from "../../hooks/useForm";
import {startDeleteUser} from "../../actions/auth";

export const DeleteAccountConfiguration = () => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: ''
  });

  const {email} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== auth.email) {
      return Swal.fire('Wrong email', 'The email is wrong', 'error')
    }
    dispatch(startDeleteUser())
  }

  return (
    <div className="bg-light border border-danger rounded p-5 mb-5">
      <h2>Delete account</h2>
      <p><span className="text-danger">Warning!</span> If you delete your account, all your tasks will be deleted. <b>This process cannot be undone!</b></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter your email to confirm</label>
          <input
            type="email"
            className="form-control"
            placeholder="mail@domain.com"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="btn btn-danger mt-3"
          disabled={email !== auth.email}
        >
          Delete account
        </button>
      </form>
    </div>
  )
}