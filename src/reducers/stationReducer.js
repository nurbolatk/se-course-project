import { REQUEST_STATIONS, GET_STATIONS } from "../actions"

const initial = {
  stations: [
    { value: 1, label: "Almaty 1" },
    { value: 2, label: "Almaty 2" },
    { value: 3, label: "Nur-Sultan 1" },
    { value: 4, label: "Nur-Sultan Nurly Zhol" }
  ],
  isLoading: false
}

const stationReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_STATIONS:
      return {
        ...state,
        isLoading: true
      }
    case GET_STATIONS:
      if (action && action.data) {
        return {
          ...state,
          stations: action.data,
          isLoading: false
        }
      }
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default stationReducer
