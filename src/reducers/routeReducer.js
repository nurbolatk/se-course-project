import { GET_ALL_ROUTES, REQUEST_ROUTES, ADD_ROUTE, SEARCH_ROUTES } from '../actions'

const initial = {
  routes: [],
  isLoading: false,
}

const routeReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_ROUTES:
      return { ...state, isLoading: true }
    case GET_ALL_ROUTES:
      return { ...state, isLoading: false }
    case ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.data],
      }
    case SEARCH_ROUTES: 
      return {
        ...state,
        routes: [action.data],
      }
    default:
      return state
  }
}

export default routeReducer
