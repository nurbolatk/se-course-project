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
  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  calcCrow = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // km
    const dLat = this.toRad(lat2 - lat1)
    const dLon = this.toRad(lon2 - lon1)
    lat1 = this.toRad(lat1)
    lat2 = this.toRad(lat2)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
  }

  // Converts numeric degrees to radians
  toRad = Value => {
    return (Value * Math.PI) / 180
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
