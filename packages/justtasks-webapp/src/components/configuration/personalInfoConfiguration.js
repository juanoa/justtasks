import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {useForm} from "../../hooks/useForm";
import {startUpdateUser} from "../../actions/auth";

export const PersonalInfoConfiguration = () => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({name: auth.name});

  const {name} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startUpdateUser({name}))
  }

  return (
    <div className="bg-light rounded p-5 mb-5">
      <h2>Personal data</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="John"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-danger mt-3">
          Save
        </button>
      </form>
    </div>
  )
}