import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Spinner from './Spinner'
import Axios from 'axios'
import { domain } from '../url'
import { formatDuration } from '../utils/dateUtils'

class OrderView extends React.Component {
  state = {
    order: null,
  }
  componentDidMount() {
    const { orders, match } = this.props
    const id = match.params.orderId
    // const orters = [
    //   {
    //     RouteId: 7,
    //     ArrStationId: 2,
    //     DepStationId: 1,
    //     UserId: 6,
    //     passengers: [
    //       {
    //         SSN: 8000000,
    //         bookInfo: {
    //           CarriageId: 9,
    //           SeatNum: 10,
    //           price: 7777,
    //           Adult: 1,
    //         },
    //         passengerInfo: {
    //           Fname: 'sweet ',
    //           Lname: 'but psycho',
    //           PhoneNum: '7777-777-77-77',
    //           Birthday: '1980-12-27',
    //         },
    //       },
    //     ],
    //     id: '379379647',
    //   },
    //   {
    //     RouteId: 7,
    //     ArrStationId: 2,
    //     DepStationId: 1,
    //     UserId: 6,
    //     passengers: [
    //       {
    //         SSN: 8000000,
    //         bookInfo: {
    //           CarriageId: 10,
    //           SeatNum: 1,
    //           price: 7777,
    //           Adult: 1,
    //         },
    //         passengerInfo: {
    //           Fname: 'sweet',
    //           Lname: 'but psycho',
    //           PhoneNum: '7777-777-77-77',
    //           Birthday: '1980-12-27',
    //         },
    //       },
    //     ],
    //     id: '379435425',
    //   },
    // ]
    // const order = orters.find(ord => ord.id === id)
    const order = orders.find(ord => ord.id === id)
    const json = JSON.stringify({
      RouteId: order.RouteId,
      ArrStationId: order.ArrStationId,
      DepStationId: order.DepStationId,
    })
    const headers = {
      'Content-type': 'application/json; charset=utf-8',
      Accept: 'application/json; charset=utf-8',
    }
    Axios.post(domain + '/routes/custom', json, { headers }).then(res => {
      console.log('custom', res.data)
      const newState = {
        trainId: res.data.trainId,
        arrStationName: res.data.arrStationName,
        arrCity: res.data.arrCity,
        arrivalTime: res.data.arrivalTime,
        depStationName: res.data.depStationName,
        depCity: res.data.depCity,
        depTime: res.data.depTime,
        ...order,
      }
      this.setState({ order: newState })
    })
    console.log(order)
  }
  render() {
    const { order } = this.state

    return (
      <div className="order-view">
        {!this.state.order ? (
          <Spinner />
        ) : (
          order.passengers.map(ps => {
            const departure = moment(order.depTime)
            const arrival = moment(order.arrivalTime)
            //display dates
            const duration = formatDuration(arrival.diff(departure, 'minutes'))
            console.log(duration)
            const depTime = departure.format('HH:mm')
            const arrTime = arrival.format('HH:mm')
            const depDate = departure.format('D MMM YYYY')
            const arrDate = arrival.format('D MMM YYYY')
            const info = ps.passengerInfo
            const ticket = ps.bookInfo
            return (
              <div className="card">
                <div className="train-row">
                  <div className="main-info">
                    <div className="departure">
                      <p className="station">{order.depStationName}</p>
                      <p className="station-city">{order.depCity}</p>
                      <p className="time">{depTime}</p>
                      <p className="date">{depDate}</p>
                    </div>

                    <div className="middle-is-missing">
                      <p className="train-id">Train #{order.trainId}</p>
                      <p className="duration-label text-muted">duration</p>
                      <p className="duration">{duration}</p>
                    </div>

                    <div className="arrival">
                      <p className="station">{order.arrStationName}</p>
                      <p className="station-city">{order.arrCity}</p>
                      <p className="time">{arrTime}</p>
                      <p className="date">{arrDate}</p>
                    </div>
                  </div>

                  <div className="passenger-info">
                    <div className="passenger-details">
                      <div className="full-name">
                        <span className="label">Passanger</span>
                        <span>
                          {info.Fname} {info.Lname}
                        </span>
                      </div>
                      <div className="ssn">
                        <span>SSN {ps.SSN}</span>
                      </div>
                    </div>
                    <div className="ticket-info">
                      <div className="ticket-info__wagon">
                        <div className="ticket-info__wagon-label">Wagon</div>
                        <div className="ticket-info__wagon-value">
                          #{ticket.CarriageId}
                        </div>
                      </div>
                      <div className="ticket-info__seat">
                        <div className="ticket-info__seat-label">Seat</div>
                        <div className="ticket-info__seat-value">
                          #{ticket.SeatNum}
                        </div>
                      </div>
                      <div className="ticket-info__price">
                        <div className="ticket-info__price-label">Price</div>
                        <div className="ticket-info__price-value">
                          {ticket.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { orders: state.order.orders }
}

export default withRouter(connect(mapStateToProps)(OrderView))
