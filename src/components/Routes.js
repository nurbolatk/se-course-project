import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import { getRoutesAction } from '../actions/routeActions'

class Routes extends Component {
  state = {}
  componentDidMount() {
    this.props.getRoutes()
  }
  makeText = route => {
    let x = ''
  }

  render() {
    const xBtn = (
      <button type="button" class="close">
        <span aria-hidden="true">&times;</span>
      </button>
    )

    return this.props.isLoading ? (
      <div className="d-flex mt-5 justify-content-center">
        <Spinner />
      </div>
    ) : (
      <div className="">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            Routes
            <Link to="/add-route">
              <button className="btn btn-primary btn-small">Add route</button>
            </Link>
          </div>
          <ul class="list-group list-group-flush">
            {this.props.routes.map((r, i) => (
              <li class="list-group-item" key={i}>
                Capacity: {r.capacity} train: {r.train}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.route.routes,
    stations: state.route.stations,
    isLoading: state.route.isLoading,
  }
}

export default connect(mapStateToProps, getRoutesAction)(Routes)
