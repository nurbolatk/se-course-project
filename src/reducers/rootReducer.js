import { combineReducers } from 'redux'
import authReducer from './authReducer'
import routeReducer from './routeReducer'
import stationReducer from './stationReducer'
import seatReducer from './seatReducer'
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  ticket: ticketReducer,
  seat: seatReducer,
  station: stationReducer,
})

export default rootReducer
