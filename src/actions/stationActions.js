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
          const options = res.map(s => ({
            value: s.idStation,
            label: s.name,
          }))
          dispatch({ type: GET_STATIONS, data: options })
        })
        .catch(e => {
          console.log(e)
        })
    },
  }
}
