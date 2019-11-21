import { combineReducers } from 'redux'
import authReducer from './authReducer'
import routeReducer from './routeReducer'
import stationReducer from './stationReducer'
import seatReducer from './seatReducer'
import ticketReducer from './ticketReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  error: errorReducer,
  seat: seatReducer,
  station: stationReducer,
  ticket: ticketReducer,
})

export default rootReducer
