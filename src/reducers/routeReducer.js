import {
  GET_ALL_ROUTES,
  REQUEST_ROUTES,
  ADD_ROUTE,
  SEARCH_ROUTES,
  PICK_ROUTE,
} from '../actions'

const initial = {
  routes: [
    {
      RouteId: 1,
      TrainId: 43,
      stations: [
        {
          CarriageId: 23,
          Name: 'Nurly-Zhol',
          ArrTime: '2016-08-13 13:35',
          DepTime: '2016-08-13 18:46',
        },
        {
          CarriageId: 34,
          Name: 'Karagandy',
          ArrTime: '2016-08-13 17:10',
          DepTime: '2016-08-13 17:30',
        },
        {
          CarriageId: 84,
          Name: 'Almaty-2',
          ArrTime: '2016-08-15 05:52',
          DepTime: null,
        },
      ],
      carriages: [
        {
          Type: 'coupe',
          AvailableSeats: 20,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 5,
        },
        {
          Type: 'coupe',
          AvailableSeats: 16,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 11,
        },
      ],
    },
    {
      RouteId: 2,
      TrainId: 43,
      stations: [
        {
          CarriageId: 23,
          Name: 'Karagandy',
          ArrTime: '2016-08-13 13:35',
          DepTime: '2016-08-13 10:12',
        },
        {
          CarriageId: 34,
          Name: 'Karagandy',
          ArrTime: '2016-08-13 17:10',
          DepTime: '2016-08-13 17:30',
        },
        {
          CarriageId: 84,
          Name: 'Almaty-2',
          ArrTime: '2016-08-14 16:59',
          DepTime: null,
        },
      ],
      carriages: [
        {
          Type: 'coupe',
          AvailableSeats: 20,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 5,
        },
        {
          Type: 'coupe',
          AvailableSeats: 16,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 11,
        },
      ],
    },
    {
      RouteId: 3,
      TrainId: 43,
      stations: [
        {
          CarriageId: 23,
          Name: 'Almaty-2',
          ArrTime: '2016-08-13 13:35',
          DepTime: '2016-08-14 04:42',
        },
        {
          CarriageId: 34,
          Name: 'Karagandy',
          ArrTime: '2016-08-13 17:10',
          DepTime: '2016-08-13 17:30',
        },
        {
          CarriageId: 84,
          Name: 'Karagandy',
          ArrTime: '2016-08-15 23:12',
          DepTime: null,
        },
      ],
      carriages: [
        {
          Type: 'coupe',
          AvailableSeats: 20,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 5,
        },
        {
          Type: 'coupe',
          AvailableSeats: 16,
        },
        {
          Type: 'platzcard',
          AvailableSeats: 11,
        },
      ],
    },
  ],
  isLoading: false,
  route: null,
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
        routes: action.data,
        isLoading: false,
      }
    case PICK_ROUTE:
      return {
        ...state,
        route: action.data,
      }
    default:
      return state
  }
}

export default routeReducer
