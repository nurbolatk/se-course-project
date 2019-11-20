import { REQUEST_SIGNIN, SIGNIN, LOGOUT } from '.'
import Axios from 'axios'
import { domain } from '../url'
import { join } from 'path'
import Cookies from 'js-cookie'
import setAuthToken from '../utils/axiosAuthHeader'

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
        console.log('sign in success', res.data)
        Cookies.set('token', token)
        const token = Cookies.get('token') ? Cookies.get('token') : null
        setAuthToken(token)
        //to set a cookie
        dispatch({ type: SIGNIN, data: res.data })
        history.push('/')
      })
      .catch(e => {
        console.log('Error when sign in', e.response)
        // dispatch({ type: SIGNIN })
      })
    // setTimeout(() => {
    //   const data = {
    //     email: userCredentials.email,
    //     firstName: 'Oleg',
    //     lastName: 'Ivanov',
    //     roles: ['ADMIN'],
    //     id: 1,
    //   }
    //   dispatch({ type: SIGNIN, data: data })
    //   history.push('/')
    // }, 600)
  }
}

export const logOutAction = dispatch => {
  return {
    logOut: history => {
      dispatch({ type: LOGOUT })
      history.push('/')
    },
  }
}
