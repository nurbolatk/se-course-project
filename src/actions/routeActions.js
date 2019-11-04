import { GET_ALL_ROUTES, REQUEST_ROUTES, ADD_ROUTE, SEARCH_ROUTES } from '.'
import Axios from 'axios'
import { domain } from '../url'

export const getRoutesAction = dispatch => {
  return {
    getRoutes: () => {
      dispatch({ type: REQUEST_ROUTES })
      // make ajax call to get all routes
      Axios.get(domain + '/in-route-stations')
        .then(res => {
          console.log(res.data)
          dispatch({ type: GET_ALL_ROUTES, data: res.data })
        })
        .catch(e => console.log(e))
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
    // make ajax call to search routes
    // dispatch({})
    const json = JSON.stringify(params)
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(json)
    fetch(domain + '/routes/search', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrer: 'no-referrer', // no-referrer, *client
      body: json, // body data type must match "Content-Type" header
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('wtf', data)
        dispatch({ type: SEARCH_ROUTES, data: data })
        history.push('/search-results')
        // Axios.post(domain + '/routes/search', json, { headers })
        //   .then(r => {
        //     console.log('response', r)
        //     dispatch({ type: SEARCH_ROUTES, data: r.data })
        //     history.push('/search-results')
        //   })
        //   .catch(e => {
        //     console.log(e)
        //   })
      })
  }
}
