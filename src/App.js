import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Signin from './components/Signin'
import AdminPanel from './components/AdminPanel'
import AddRoute from './components/AddRoute'
import Routes from './components/Routes'
import RoutesResult from './components/RoutesResult'
import TrainView from './components/TrainView'
import AddPassenger from './components/AddPassenger'
import AddStation from './components/AddStation'
import OrderHistory from './components/OrderHistory'
import OrderView from './components/OrderView'

const PrivateRoute = ({ component: Component, auth, role, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.user) {
        if (role) {
          if (auth.user.roles.some(r => r === role)) {
            return <Component {...props} />
          }
          alert("You don't have permissions!")
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )
        }
        return <Component {...props} />
      } else {
        alert('Please log in!')
        return (
          <Redirect
            to={{
              pathname: '/sign-in',
            }}
          />
        )
      }
    }}
  />
)

const App = props => {
  return (
    <Router>
      <>
        <Navbar />
        <main className="page-bg">
          <Switch>
            <Route path="/sign-up">
              <Register />
            </Route>
            <Route path="/sign-in">
              <Signin />
            </Route>
            <Route path="/administration">
              <AdminPanel />
            </Route>
            <Route path="/routes">
              <Routes />
            </Route>
            <PrivateRoute
              path="/add-route"
              component={AddRoute}
              auth={props.auth}
              role="ROLE_MANAGER"
            />
            <PrivateRoute
              path="/add-station"
              component={AddStation}
              auth={props.auth}
              role="ROLE_MANAGER"
            />
            {/* <Route path="/add-route">
              <AddRoute />
            </Route> */}
            {/* <Route path="/add-station">
              <AddStation />
            </Route> */}
            <Route path="/search-results">
              <RoutesResult />
            </Route>
            <Route path="/view-train">
              <TrainView />
            </Route>
            <PrivateRoute
              path="/make-order"
              component={AddPassenger}
              auth={props.auth}
            />
            <PrivateRoute
              path="/orders"
              exact
              component={OrderHistory}
              auth={props.auth}
            />
            {/* <PrivateRoute
              path="/order/:orderId"
              component={OrderView}
              auth={props.auth}
            /> */}
            <PrivateRoute
              path="/orders/:orderId"
              component={OrderView}
              auth={props.auth}
            />
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App)
