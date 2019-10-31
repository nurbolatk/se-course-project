import { GET_ALL_ROUTES, REQUEST_ROUTES, ADD_ROUTE } from '.'
import Axios from 'axios'
import { domain } from '../url'

export const getRoutesAction = dispatch => {
  return {
    getRoutes: () => {
      dispatch({ type: REQUEST_ROUTES })
      dispatch({ type: GET_ALL_ROUTES })
      // make ajax call to get all routes
      // Axios.get(domain + "/in-route-stations")
      //   .then(res => {
      //     console.log(res.data);
      // dispatch({ type: GET_ROUTES, data: res.data });
      //   })
      //   .catch(e => console.log(e));
    },
  }
}

export const addRouteAction = (routeData, history) => {
  return dispatch => {
    // console.log(routeData)
    // console.log(history)
    dispatch({ type: REQUEST_ROUTES })
    // make ajax call to add route
    const json = JSON.stringify(routeData)
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(json)
    // redirect to routes
    Axios.post(domain + '/routes', json, { headers })
      .then(r => console.log(r))
      .catch(e => console.log(e))
    //   dispatch({ type: ADD_ROUTE, data: routeData });
    history.push('/routes')
  }
}

export const searchRoutesAction = (params, history) => {
  return dispatch => {
    dispatch({ type: REQUEST_ROUTES })
    console.log(params)
    // make ajax call to search routes
    history.push('/search-results')
  }
}
