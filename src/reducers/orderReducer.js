import { SAVE_ORDER, CLEAR_ORDER, START_LOADING_ORDER } from '../actions'

const initialState = {
  orders: [],
  isLoading: false,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_ORDER: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SAVE_ORDER:
      const ord = action.data
      const id = ('' + Date.now()).substring(4)
      ord.id = id
      return {
        ...state,
        orders: [...state.orders, ord],
        isLoading: false,
      }
    case CLEAR_ORDER:
      return {
        orders: {},
        isLoading: false,
      }
    default:
      return state
  }
}

export default orderReducer
