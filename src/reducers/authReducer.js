import { SIGNIN, LOGOUT, REQUEST_SIGNIN, STOP_LOADING_SIGNIN } from '../actions'

const initial = {
  user: null,
  isFetching: false,
}

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_SIGNIN:
      return {
        ...state,
        isFetching: true,
      }
    case SIGNIN:
      console.log(action)
      if (action.data) {
        return {
          ...state,
          user: {
            email: action.data.sub,
            roles: action.data.roles,
            UserId: action.data.userId,
          },
          isFetching: false,
        }
      }
    case STOP_LOADING_SIGNIN:
      return {
        ...state,
        isFetching: false,
      }
    case LOGOUT:
      return { user: null, isFetching: false }
    default:
      return state
  }
}

export default authReducer
