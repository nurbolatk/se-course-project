import Axios from 'axios'
import { domain } from '../url'
import { START_LOADING_TICKETS, STOP_LOADING, CLEAR_SEATS } from '.'

export const bookTicketAction = (bookData, history) => {
  return dispatch => {
    dispatch({ type: START_LOADING_TICKETS })
    // make ajax call to add route
    const json = JSON.stringify(bookData)
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(json)
    // redirect to routes
    Axios.post(domain + '/book', json, { headers })
      .then(r => {
        dispatch({ type: STOP_LOADING })
        dispatch({
          type: CLEAR_SEATS,
        })
        history.push('/order-history/1')
      })
      .catch(e => {
        dispatch({ type: STOP_LOADING })
        console.log(e.response)
      })
    //   dispatch({ type: ADD_ROUTE, data: routeData });
  }
}
