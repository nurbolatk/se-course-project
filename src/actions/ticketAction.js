import Axios from 'axios'
import { domain } from '../url'
import { START_LOADING_TICKETS, STOP_LOADING, CLEAR_SEATS, SAVE_ORDER } from '.'

export const bookTicketAction = (bookData, history) => {
  return dispatch => {
    dispatch({ type: START_LOADING_TICKETS })
    // make ajax call to add route
    const json = JSON.stringify(bookData)
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(json)
    dispatch({ type: SAVE_ORDER, data: bookData })
    // redirect to routes
    Axios.post(domain + '/book', json, { headers })
      .then(r => {
        dispatch({ type: STOP_LOADING })
        dispatch({
          type: CLEAR_SEATS,
        })
        history.push('/orders')
      })
      .catch(e => {
        dispatch({ type: STOP_LOADING })
        console.log(e.response)
      })
    //   dispatch({ type: ADD_ROUTE, data: routeData });
  }
}
