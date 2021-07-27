import Swal from 'sweetalert2'

import {types} from "../types/types";
import {fetchWithToken} from "../helpers/fetch";

export const startPayment = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('payments/create-payment-intent', {}, 'POST')
    const body = await res.json()

    if (body.ok) {
      Swal.fire('Success', 'The payment has been successfully completed. Log out and log back in if the changes have not been applied.', 'success')
    } else {
      Swal.fire('Error', 'Email or password are wrong', 'error')
    }
  }
}