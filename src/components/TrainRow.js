import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { pickRouteAction } from '../actions/routeActions'
import { formatDuration } from '../utils/dateUtils'

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
  console.log(route)
  const wagons = route.carriages.reduce((accumulator, currentRef) => {
    const current = { ...currentRef }
    console.log(currentRef)
    const type = current.Type
    const found = accumulator.find(elem => {
      return elem.Type === type
    })
    if (found) {
      console.log('booked')

      console.log('av1')
      console.log(found.AvailableSeats)
      found.AvailableSeats += current.AvailableSeats
      found.AvailableSeats -= current.BookedSeats.length
      console.log('av2')
      console.log(found.AvailableSeats)
    } else accumulator.push(current)
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
        {wagons.map((w, i) => (
          <button
            key={i}
            onClick={e => props.pickRoute(route, w.Type, props.history)}
            className="btn btn--link wagon"
          >
            <h6 className="type mb-1">{w.Type}</h6>
            <div className="price">10 699 KZT</div>
            <div className="available-seats">{w.AvailableSeats} seats</div>
          </button>
        ))}
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  pickRoute: (routeData, wType, history) =>
    dispatch(pickRouteAction(routeData, wType, history)),
})

export default withRouter(connect(null, mapDispatchToProps)(TrainRow))
