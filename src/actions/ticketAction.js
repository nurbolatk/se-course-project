import Axios from 'axios'
import { domain } from '../url'
import { START_LOADING_TICKETS } from '.'

export const bookTicketAction = (bookData, history) => {
  return dispatch => {
    dispatch({ type: START_LOADING_TICKETS })
    // make ajax call to add route
    const json = JSON.stringify(bookData)
    const headers = {
      'Content-Type': 'application/json',
    }
    // console.log(json)
    // redirect to routes
    Axios.post(domain + '/routes', json, { headers })
      .then(r => {
        console.log(r)
        history.push('/routes')
      })
      .catch(e => console.log(e))
    //   dispatch({ type: ADD_ROUTE, data: routeData });
  }
}
