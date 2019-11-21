import { ERROR_SIGN_IN } from '../actions'

const initial = {}

const errorReducer = (state = initial, action) => {
  switch (action.type) {
    case ERROR_SIGN_IN:
      if (action.data) {
        return {
          ...state,
          auth: action.data.msg,
        }
      }
      return {
        ...state,
        auth: null,
      }
    default:
      return state
  }
}

export default errorReducer
