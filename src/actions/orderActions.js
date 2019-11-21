import Axios from 'axios'
import { domain } from '../url'
import { SAVE_ORDER, START_LOADING_ORDER } from '.'

export const loadOrdersAction = UserId => {
  return dispatch => {
    dispatch({ type: START_LOADING_ORDER })
    // make ajax call to add route
    Axios.get(domain + `/book/${UserId}`)
      .then(r => {
        dispatch({ type: SAVE_ORDER, data: r.data })
      })
      .catch(e => {
        console.log(e)
        console.log(e.response)
      })
  }
}
