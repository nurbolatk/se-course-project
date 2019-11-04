import { REQUEST_SIGNIN, SIGNIN, LOGOUT } from '.'
import Axios from 'axios'
import { domain } from '../url'
import { join } from 'path'

export const signInAction = (userCredentials, history) => {
  return (dispatch, getState) => {
    dispatch({ type: REQUEST_SIGNIN })
    // make asyn call to server
    const json = JSON.stringify(userCredentials)
    const headers = {
      'Content-Type': 'application/json',
    }
    Axios.post(domain + '/login', json, { headers }).then(res => {
      dispatch({ type: SIGNIN, data: res.data })
      history.push('/')
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
