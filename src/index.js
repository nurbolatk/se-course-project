import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import './index.css'
import App from './App'
import rootReducer from './reducers/rootReducer'
import setAuthToken from './utils/axiosAuthHeader'
import { SIGNIN } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const token = Cookies.get('token')
if (token) {
  setAuthToken(token)
  const decoded = jwt_decode(token)
  store.dispatch({ type: SIGNIN, data: decoded })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
