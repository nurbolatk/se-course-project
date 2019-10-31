import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Signin from './components/Signin'
import AdminPanel from './components/AdminPanel'
import AddRoute from './components/AddRoute'
import Routes from './components/Routes'
import RoutesResult from './components/RoutesResult'

const App = () => {
  return (
    <Router>
      <div className='home d-flex flex-column'>
        <Navbar />
        <Switch>
          <Route path='/sign-up'>
            <Register />
          </Route>
          <Route path='/sign-in'>
            <Signin />
          </Route>
          <Route path='/administration'>
            <AdminPanel />
          </Route>
          <Route path='/routes'>
            <Routes />
          </Route>
          <Route path='/add-route'>
            <AddRoute />
          </Route>
          <Route path='/search-results'>
            <RoutesResult />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
