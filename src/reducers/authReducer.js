import { SIGNIN, LOGOUT, REQUEST_SIGNIN } from '../actions'

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
          user: action.data,
          isFetching: false,
        }
      }
    // else {
    //   return {
    //     ...state,
    //     user: {
    //       email: 'not@logged.haha',
    //     },
    //     isFetching: false,
    //   }
    // }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default authReducer
