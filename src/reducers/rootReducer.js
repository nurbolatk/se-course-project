import { combineReducers } from 'redux'
import authReducer from './authReducer'
import routeReducer from './routeReducer'
import stationReducer from './stationReducer'
import seatReducer from './seatReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  seat: seatReducer,
  station: stationReducer,
})

export default rootReducer
