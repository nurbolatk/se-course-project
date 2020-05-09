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
    Axios.post(domain + '/authenticate', json, { headers, timeout: 3000 })
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
        console.log(e)
        if (e.response) {
          console.log('Error when sign in', e.response)
          const msg = e.response.data
            ? e.response.data.message
            : 'Wrong email or password'
          dispatch({ type: ERROR_SIGN_IN, data: { msg } })
        }
        dispatch({
          type: ERROR_SIGN_IN,
          data: { msg: 'Incorrect email or password' },
        })
        dispatch({ type: STOP_LOADING_SIGNIN })
      })
  }
}

export const registerAction = (userCredentials, history) => {
  return (dispatch, getState) => {
    dispatch({ type: REQUEST_SIGNIN })
    // make asyn call to server
    const json = JSON.stringify(userCredentials)
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log('sign up', json)
    Axios.post(domain + '/register', json, { headers, timeout: 3000 })
      .then(res => {
        dispatch({ type: STOP_LOADING_SIGNIN })
        history.push('/')
      })
      .catch(e => {
        dispatch({ type: STOP_LOADING_SIGNIN })
        console.log(e)
        if (e.response) {
          console.log(e.response)
        }
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

export const authErrorAlert = msg => {
  console.log('alert auth ')
  return dispatch => {
    dispatch({
      type: ERROR_SIGN_IN,
      data: { msg },
    })
  }
}
