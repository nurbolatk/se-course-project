import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Alert from './Alert'
import { connect } from 'react-redux'
import AddPassangerForm from './AddPassangerForm'
import Spinner from './Spinner'
import { bookTicketAction } from '../actions/ticketAction'

class AddPassenger extends Component {
  constructor(props) {
    super(props)
    const { seats } = this.props
    console.log('seats?', seats)
    const passangers = []
    for (const wagon in seats) {
      if (seats.hasOwnProperty(wagon)) {
        const seatNums = seats[wagon]
        seatNums.forEach(seat => {
          passangers.push({
            SSN: '',
            bookInfo: {
              CarriageId: parseInt(wagon),
              SeatNum: seat,
              price: 7777,
              Adult: 1,
            },
            passengerInfo: {
              Fname: '',
              Lname: '',
              PhoneNum: null,
              Email: '',
              Birthday: '',
            },
          })
        })
      }
    }
    this.state = {
      passangers,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { route, user } = this.props
    const request = {
      RouteId: route.RouteId,
      ArrStationId: route.stations[0].StationId,
      DepStationId: route.stations[route.stations.length - 1].StationId,
      // UserId: user.userId,
      UserId: 1,
      passengers: this.state.passangers,
    }
    console.log(request)
    this.props.bookTicket(request, this.props.history)
  }

  handleChange = (e, ind) => {
    const { name, value } = e.target
    this.setState(state => {
      const npsgs = [...state.passangers]
      if (name === 'SSN') {
        npsgs[ind][name] = parseInt(value)
      } else {
        npsgs[ind].passengerInfo[name] = value
      }
      return {
        ...state,
        passangers: npsgs,
      }
    })
  }
  render() {
    const { seats, ticket } = this.props
    const { isLoading, isSuccess } = ticket
    const form = []
    let i = 0
    for (const wagon in seats) {
      if (seats.hasOwnProperty(wagon)) {
        const seatNums = seats[wagon]
        seatNums.forEach((seat, ind) => {
          const eprst = i
          form.push(
            <AddPassangerForm
              psg={this.state.passangers[eprst]}
              ind={eprst}
              handleChange={this.handleChange}
              seatNum={seat}
              wagon={wagon}
            />
          )
          i++
        })
      }
    }
    if (Object.keys(this.props.seats).length === 0) {
      return <Alert msg="No seats selected!" />
    }
    return (
      <div className="add-passenger">
        <form onSubmit={this.handleSubmit}>
          {form}
          <button
            type="submit"
            className="btn btn--primary mb-4"
            disabled={isLoading}
          >
            {isLoading ? <Spinner type="small" /> : 'Book Tickets'}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    seats: state.seat.seats,
    ticket: state.ticket,
    route: state.route.route,
    user: state.auth.user,
  }
}

const mapDispathToProps = dispatch => ({
  bookTicket: (credentials, history) =>
    dispatch(bookTicketAction(credentials, history)),
})

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(AddPassenger)
)
