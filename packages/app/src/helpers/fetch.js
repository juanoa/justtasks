import moment from "moment";

const baseUrl = process.env.REACT_APP_API_URL

export const fetchWithoutToken = (endpoint, data, method='GET') => {
  const url = `${baseUrl}/${endpoint}`

  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'client-datetime': (new Date()).toISOString()
      },
      body: JSON.stringify(data)
    })
  }
}

export const fetchWithToken = (endpoint, data, method='GET') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'x-token': token,
        'client-datetime': moment().format()
      }
    })
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
        'client-datetime': moment().format()
      },
      body: JSON.stringify(data)
    })
  }
}