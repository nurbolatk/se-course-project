import { REQUEST_STATIONS, GET_STATIONS } from '.'
import Axios from 'axios'
import { domain } from '../url'

export const getStationsAction = dispatch => {
  return {
    getStations: () => {
      dispatch({ type: REQUEST_STATIONS })
      // make async call
      Axios.get(domain + '/stations')
        .then(res => {
          dispatch({ type: GET_STATIONS, data: res.data })
        })
        .catch(e => {
          console.log(e)
        })
    },
  }
}
