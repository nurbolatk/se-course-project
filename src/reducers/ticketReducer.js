import { START_LOADING_TICKETS, BOOK_TICKETS, STOP_LOADING } from '../actions'

const initialState = {
  isLoading: false,
  isSuccess: false,
}

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_TICKETS:
      return {
        ...state,
        isLoading: true,
      }
    case BOOK_TICKETS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default ticketReducer
