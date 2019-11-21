import {
  REQUEST_SIGNIN,
  SIGNIN,
  LOGOUT,
  ERROR_SIGN_IN,
  STOP_LOADING_SIGNIN,
} from '.'
import Axios from 'axios'
import { domain } from '../url'
import { join } from 'path'
import Cookies from 'js-cookie'
import setAuthToken from '../utils/axiosAuthHeader'
import jwt_decode from 'jwt-decode'

export const signInAction = (userCredentials, history) => {
  return (dispatch, getState) => {
    dispatch({ type: REQUEST_SIGNIN })
    // make asyn call to server
    const json = JSON.stringify(userCredentials)
    const headers = {
      'Content-Type': 'application/json',
    }
    Axios.post(domain + '/authenticate', json, { headers })
      .then(res => {
        console.log('sign in success', res.data.token)
        const token = res.data.token
        Cookies.set('token', token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        console.log('user logged data', decoded)
        dispatch({ type: SIGNIN, data: decoded })
        history.push('/')
      })
      .catch(e => {
        console.log('Error when sign in', e.response)
        const msg = e.response.data
          ? e.response.data.message
          : 'Wrong email or password'
        dispatch({ type: STOP_LOADING_SIGNIN })
        dispatch({ type: ERROR_SIGN_IN, data: { msg } })
      })
  }
}

export const logOutAction = dispatch => {
  return {
    logOut: history => {
      Cookies.remove('token')
      dispatch({ type: LOGOUT })
      history.push('/')
    },
  }
}
