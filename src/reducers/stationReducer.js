import { REQUEST_STATIONS, GET_STATIONS } from "../actions";

const initial = {
  stations: [
    { id: 1, name: "Almaty 1" },
    { id: 2, name: "Almaty 2" },
    { id: 3, name: "Nur-Sultan 1" },
    { id: 4, name: "Nur-Sultan Nurly Zhol" }
  ],
  isLoading: false
};

const stationReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_STATIONS:
      return {
        ...state,
        isLoading: true
      };
    case GET_STATIONS:
      return {
        ...state,
        stations: action.data,
        isLoading: false
      };
    default:
      return state;
  }
};

export default stationReducer;
