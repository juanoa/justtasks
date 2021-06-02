import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from "../../hooks/useForm";

export const RegisterSection = () => {

  const history = useHistory();

  const [formValues, handleInputChange] = useForm({
    email: ''
  });

  const {email} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/register?email=${email}`)
  }

  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
      <div className="col-md-8 mx-auto my-5">
        <h1>That's all folks!</h1>
        <p className="lead fw-normal mt-4">
          Simple, easy and functional
        </p>
        <div className="col-md-6 mx-auto mt-5">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                aria-describedby="button-addon2"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-danger"
                type="submit"
                id="button-addon2"
              >
                Sign up <br/><small>(Free forever)</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}