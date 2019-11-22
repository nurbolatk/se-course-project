import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { pickRouteAction } from '../actions/routeActions'
import { formatDuration } from '../utils/dateUtils'
//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
const calcCrow = (lat1, lon1, lat2, lon2) => {
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
const toRad = Value => {
  return (Value * Math.PI) / 180
}
const TrainRow = props => {
  const { route } = props
  const origin = route.stations[0]
  const destination = route.stations[route.stations.length - 1]
  const departure = moment(origin.DepTime)
  const arrival = moment(destination.ArrTime)
  //display dates
  const duration = formatDuration(arrival.diff(departure, 'minutes'))
  console.log(duration)
  const depTime = departure.format('HH:mm')
  const arrTime = arrival.format('HH:mm')
  const depDate = departure.format('D MMM YYYY')
  const arrDate = arrival.format('D MMM YYYY')
  // Wagon types
  const wagons = route.carriages.reduce((accumulator, currentRef) => {
    const current = { ...currentRef }
    const type = current.Type
    const found = accumulator.find(elem => {
      return elem.Type === type
    })
    // console.log(current);
    // console.log(found);
    if (found) {
      found.AvailableSeats +=
        current.AvailableSeats - current.BookedSeats.length
    } else {
      current.AvailableSeats -= current.BookedSeats.length
      accumulator.push(current)
    }

    return accumulator
  }, [])
  return (
    <div className="train-row">
      <div className="main-info">
        <div className="departure">
          <p className="station">{origin.Name}</p>
          <p className="time">{depTime}</p>
          <p className="date">{depDate}</p>
        </div>

        <div className="middle-is-missing">
          <p className="train-id">Train #{route.TrainId}</p>
          <p className="duration-label text-muted">duration</p>
          <p className="duration">{duration}</p>
        </div>

        <div className="arrival">
          <p className="station">{destination.Name}</p>
          <p className="time">{arrTime}</p>
          <p className="date">{arrDate}</p>
        </div>
      </div>
      <div className="carriages-list ">
        {wagons.map((w, i) => {
          let price = '12 690₸'
          if (w.Type.toLowerCase() === 'lux') {
            price = '21 440₸'
          } else if (w.Type.toLowerCase() === 'lux') {
            price = '6 990₸'
          }
          return (
            <button
              key={i}
              onClick={e => props.pickRoute(route, w.Type, props.history)}
              className="btn btn--link wagon"
            >
              <h6 className="type mb-1">{w.Type}</h6>
              <div className="price">{price}</div>
              <div className="available-seats">{w.AvailableSeats} seats</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  pickRoute: (routeData, wType, history) =>
    dispatch(pickRouteAction(routeData, wType, history)),
})

export default withRouter(connect(null, mapDispatchToProps)(TrainRow))
