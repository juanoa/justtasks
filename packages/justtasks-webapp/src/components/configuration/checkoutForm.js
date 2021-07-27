import React, {useState} from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import {fetchWithToken} from "../../helpers/fetch";
import {useDispatch, useSelector} from "react-redux";
import {startUpdateUser} from "../../actions/auth";

import('./checkoutForm.css')

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch()
  const {email, name} = useSelector(state => state.auth)

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    },
    hidePostalCode: true
  };

  const startCheckout = () => {
    fetchWithToken('payments/create-payment-intent', {email, name}, 'POST')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setClientSecret(data.clientSecret)
      })
  }

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      dispatch(startUpdateUser({premium: true, premiumSince: Date.now()}))
    }
  };

  if (clientSecret) {
    return (
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h4>Shopping Bill</h4>
          <table className="bill-table">
            <tbody className="bill-tbody">
            <tr>
              <td>JustTasks (Only one payment)</td>
              <td align="right">$10.00</td>
            </tr>
            <tr>
              <td>Special discount 🎁</td>
              <td align="right">-$5.01</td>
            </tr>
            <tr>
              <td>Price Total</td>
              <td align="right">$4.99</td>
            </tr>
            </tbody>
            <tfoot className="bill-tfoot">
            <tr>
              <td>Total</td>
              <td align="right">$4.99</td>
            </tr>
            </tfoot>
          </table>
        </div>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange}/>
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
        >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"/>
          ) : (
            "Pay now"
          )}
        </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded!
        </p>
      </form>
    );
  } else {
    return (
      <div className="text-center">
        <button
          className="btn btn-danger"
          onClick={startCheckout}
        >
          Go to Checkout
        </button>
      </div>
    )
  }

}
