import React from 'react'
import moment from 'moment'
import { formatDuration } from '../utils/dateUtils'

const TrainRow = props => {
  const { route } = props
  const origin = route.stations[0]
  const destination = route.stations[route.stations.length - 1]
  const departure = moment(origin.DepTime)
  const arrival = moment(destination.ArrTime)
  //display dates
  const duration = formatDuration(arrival.diff(departure, 'minutes'))
  const depTime = departure.format('HH:mm')
  const arrTime = arrival.format('HH:mm')
  const depDate = departure.format('D MMM YYYY')
  const arrDate = arrival.format('D MMM YYYY')
  // Wagon types
  const wagons = route.carriages.reduce((accumulator, current) => {
    const type = current.Type
    const found = accumulator.find(elem => {
      return elem.Type === type
    })
    if (found) found.AvailableSeats += current.AvailableSeats
    else accumulator.push(current)
    return accumulator
  }, [])
  return (
    <div className='d-flex train-result text-center'>
      <div className='main-info mr-3 flex-grow-1'>
        <div className='row align-items-center'>
          <div className='col'>
            <div className='departure d-flex flex-column  align-items-center'>
              <p className='station'>{origin.Name}</p>
              <p className='time display-4'>{depTime}</p>
              <p className='date'>{depDate}</p>
            </div>
          </div>
          <div className='col'>
            <p className='train-id'>Train #{route.TrainId}</p>
            <p className='duration-label text-muted'>duration</p>
            <p className='duration'>{duration}</p>
          </div>
          <div className='col'>
            <div className='arrival d-flex flex-column  align-items-center'>
              <p className='station'>{destination.Name}</p>
              <p className='time display-4'>{arrTime}</p>
              <p className='date'>{arrDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='list-group list-group-horizontal '>
        {wagons.map((w, i) => (
          <a
            href='#'
            key={i}
            className='wagon list-group-item d-flex flex-column justify-content-center'>
            <h6 className='type mb-1'>{w.Type}</h6>
            <div className='price'>10 699 KZT</div>
            <div className='available-seats'>{w.AvailableSeats} seats</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TrainRow
