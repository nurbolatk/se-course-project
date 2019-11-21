import { SAVE_SEATS, CLEAR_SEATS } from '../actions'

const initialState = {
  seats: {},
}

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEATS:
      return {
        ...state,
        seats: action.data,
      }
    case CLEAR_SEATS:
      return {
        seats: {},
      }
    default:
      return state
  }
}

export default seatReducer
