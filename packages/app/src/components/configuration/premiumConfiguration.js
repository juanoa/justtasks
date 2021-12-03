import React from 'react'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {useSelector} from "react-redux";

import CheckoutForm from "./checkoutForm";

export const PremiumConfiguration = () => {

  const promise = loadStripe(process.env.REACT_APP_STRAPI_KEY);

  const {premium} = useSelector(state => state.auth)

  return (
    <div className="bg-light rounded p-5 mb-5">
      <h2>Premium</h2>
      {
        premium
          ?
          <div>
            <p>You are already a premium user! Enjoy all its features.</p>
          </div>
          :
          <div className="row mt-4">
            <div className="col-md-6">
              <ul className="premium-features-list">
                <li>Add <b>unlimited</b> daily tasks</li>
                <li>Task <b>reorganization</b></li>
                <li>Pay now, enjoy it <b>forever</b></li>
                <li><b>Support</b> the developer</li>
              </ul>
              <h5 className="text-center mt-4 mb-5">New features coming soon!</h5>
            </div>
            <div className="col-md-6">
              <Elements stripe={promise}>
                <CheckoutForm/>
              </Elements>
            </div>
          </div>
      }
    </div>
  )
}