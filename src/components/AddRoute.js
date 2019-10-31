import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addRouteAction } from '../actions/routeActions'
import RouteRow from './RouteRow'

const format = 'YYYY-MM-DD HH:mm'

export class AddRoute extends Component {
  state = {
    capacity: 100,
    train: 9,
    origin: { id: null, depTime: '', arrTime: '' },
    destination: { id: null, depTime: '', arrTime: '' },
    stations: [],
  }
  checkStation = (station, origin, destination) => {
    if (!station) {
      alert(`Please select the ${origin && 'first'} ${destination && 'destination'} station!`)
      return false
    }
    const arrival = moment(station.arrTime, format, true)
    const departure = moment(station.depTime, format, true)
    const now = moment()
    if (arrival.format() === 'Invalid date') {
      alert(
        `${origin ? 'Origin a' : 'A'}${
          destination ? 'Destionation a' : 'A'
        }rrival must be in correct format!`
      )
      return false
    }
    if (departure.format() === 'Invalid date') {
      alert(
        `${origin ? 'Origin d' : 'D'}${
          destination ? 'Destionation d' : 'D'
        }eparture must be in correct format!`
      )
      return false
    }
    // if (now.isAfter(arrival)) {
    //   alert("Your arrival date should be after now!");
    //   return false;
    // }
    // if (departure.isBefore(arrival)) {
    //   alert("Your departure date should be after arrival!");
    //   return false;
    // }
    return true
  }
  saveRoute = e => {
    e.preventDefault()
    // chec origin
    if (!this.checkStation(this.state.origin, true, false)) return
    // check stations inbetween
    this.state.stations.forEach(s => {
      if (!this.checkStation(s, false, false)) return
    })
    // chec destination
    if (!this.checkStation(this.state.destination, false, true)) return
    console.log('hello')

    // {
    //     "capacity": 100,
    //     "train": 9,
    //     "stations": [
    //       {"id": 1, "depTime": "2016-10-11 08:30:00",
    //        "arrTime": "2016-10-11 08:00:00"},
    //       {"id": 4, "depTime": "2016-10-12 04:30:00",
    //        "arrTime": "2016-10-12 04:00:00"},
    //       {"id": 10, "depTime": "2016-10-12 07:30:00",
    //        "arrTime": "2016-10-12 07:00:00"},
    //       {"id": 2, "depTime": "2016-10-12 02:30:00",
    //        "arrTime": "2016-10-12 02:00:00"}
    //     ]
    //   }
    const res = {
      capacity: this.state.capacity,
      train: this.state.train,
      stations: [
        this.refactorDates(this.state.origin),
        this.state.stations.map(s => this.refactorDates(s)),
        this.refactorDates(this.state.destination),
      ],
    }
    console.log(res)
    this.props.addRoute(res, this.props.history)
  }
  refactorDates = station => {
    return { ...station, depTime: station.depTime + ':00', arrTime: station.arrTime + ':00' }
  }
  addStation = e => {
    this.setState(state => {
      return {
        ...state,
        stations: [...state.stations, { id: null, depTime: '', arrTime: '' }],
      }
    })
  }
  removeStation = (e, ind) => {
    this.setState(state => {
      return {
        ...state,
        stations: state.stations.filter((s, i) => i !== ind),
      }
    })
  }
  onSelectStation = (ind, id, origin, destination) => {
    if (origin) {
      this.setState(state => ({
        origin: {
          ...state.origin,
          id: id,
        },
      }))
    } else if (destination) {
      this.setState(state => ({
        destination: {
          ...state.destination,
          id: id,
        },
      }))
    } else {
      this.setState(state => {
        const newState = { ...state }
        newState.stations[ind].id = id
        return newState
      })
    }
  }
  onSelectDepTime = (ind, depTime, origin, destination) => {
    if (origin) {
      this.setState(state => ({
        origin: {
          ...state.origin,
          depTime: depTime,
        },
      }))
    } else if (destination) {
      this.setState(state => ({
        destination: {
          ...state.destination,
          depTime: depTime,
        },
      }))
    } else {
      this.setState(state => {
        const newState = { ...state }
        newState.stations[ind].depTime = depTime
        console.log(newState)
        return newState
      })
    }
  }
  onSelectArrTime = (ind, arrTime, origin, destination) => {
    if (origin) {
      this.setState(state => ({
        origin: {
          ...state.origin,
          arrTime: arrTime,
        },
      }))
    } else if (destination) {
      this.setState(state => ({
        destination: {
          ...state.destination,
          arrTime: arrTime,
        },
      }))
    } else {
      this.setState(state => {
        const newState = { ...state }
        newState.stations[ind].arrTime = arrTime
        console.log(newState)
        return newState
      })
    }
  }
  render() {
    return (
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title mb-4'>Create new route</h5>
            <form onSubmit={this.saveRoute}>
              <RouteRow
                options={this.props.stations}
                origin
                onSelectStation={this.onSelectStation}
                onSelectDepTime={this.onSelectDepTime}
                onSelectArrTime={this.onSelectArrTime}
                state={this.state.origin}
              />
              {this.state.stations.map((s, i) => {
                return (
                  <RouteRow
                    options={this.props.stations}
                    ind={i}
                    key={i}
                    removeStation={this.removeStation}
                    onSelectStation={this.onSelectStation}
                    onSelectDepTime={this.onSelectDepTime}
                    onSelectArrTime={this.onSelectArrTime}
                    state={s}
                  />
                )
              })}
              <div className='form-row'>
                <button type='button' className='btn btn-light col-12' onClick={this.addStation}>
                  Add station
                </button>
              </div>
              <RouteRow
                options={this.props.stations}
                destination
                onSelectStation={this.onSelectStation}
                onSelectDepTime={this.onSelectDepTime}
                onSelectArrTime={this.onSelectArrTime}
                state={this.state.destination}
              />
              <input type='submit' className='btn btn-primary ' value='Save' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRoute: (routeData, history) => dispatch(addRouteAction(routeData, history)),
})

const mapStateToProps = state => {
  return {
    stations: state.station.stations,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddRoute)
)
