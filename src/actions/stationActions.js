import { REQUEST_STATIONS, GET_STATIONS, STOP_REQUEST_STATIONS } from '.'
import Axios from 'axios'
import { domain } from '../url'

export const getStationsAction = dispatch => {
  return {
    getStations: () => {
      dispatch({ type: REQUEST_STATIONS })
      // make async call
      Axios.get(domain + '/stations')
        .then(res => {
          const options = res.data.map(s => ({
            ...s,
            value: s.stationId,
            label: s.name,
            city: s.city,
          }))
          dispatch({ type: GET_STATIONS, data: options })
        })
        .catch(e => {
          console.log('Couldn fetch stations', e)
          dispatch({ type: GET_STATIONS })
        })
    },
  }
}

export const addStationAction = dispatch => {
  return {
    addStation: station => {
      dispatch({ type: REQUEST_STATIONS })
      // make async call
      const json = JSON.stringify(station)
      const headers = {
        'Content-Type': 'application/json',
      }
      console.log('adding stationnn')
      console.log(json)
      Axios.post(domain + '/stations', json, { headers, timeout: 5000 })
        .then(res => {
          console.log('Res of posting station', res)
          dispatch({ type: STOP_REQUEST_STATIONS })
        })
        .catch(e => {
          console.log('Error posting station', e)

          dispatch({ type: STOP_REQUEST_STATIONS })
        })
    },
  }
}
