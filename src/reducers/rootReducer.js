import { combineReducers } from 'redux'
import authReducer from './authReducer'
import routeReducer from './routeReducer'
import stationReducer from './stationReducer'
import seatReducer from './seatReducer'
import ticketReducer from './ticketReducer'
import errorReducer from './errorReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  error: errorReducer,
  seat: seatReducer,
  station: stationReducer,
  ticket: ticketReducer,
  order: orderReducer,
})

export default rootReducer
