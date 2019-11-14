import { REQUEST_STATIONS, GET_STATIONS } from "."
import Axios from "axios"
import { domain } from "../url"

export const getStationsAction = dispatch => {
  return {
    getStations: () => {
      dispatch({ type: REQUEST_STATIONS })
      // make async call
      Axios.get(domain + "/stations", { timeout: 100 })
        .then(res => {
          const options = res.data.map(s => ({
            value: s.stationId,
            label: s.name,
            city: s.city
          }))
          dispatch({ type: GET_STATIONS, data: options })
        })
        .catch(e => {
          console.log("Couldn fetch stations", e)
          dispatch({ type: GET_STATIONS })
        })
    }
  }
}
