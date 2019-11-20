import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import { connect } from 'react-redux'
import AddPassangerForm from './AddPassangerForm'
import Spinner from './Spinner'
import { bookTicketAction } from '../actions/ticketAction'

// {
//   "RouteId": 1,
//   "ArrStationId": 1,
//   "DepStationId": 2,
//   "passengers":
//     [
//       {
//         "SSN": 23,
//         "bookInfo":{
//           "CarriageId": 1,
//           "SeatNum": 16,
//            "Price": 12500,
//           "Adult": 1
//         },

//         "passengerInfo":{
//           "Fname": "Edward",
//           "Lname": "Snowden",
//           "PhoneNum": 1122,
//           "Email": "esnow@nu.edu.kz",
//           "Birthday": "1981-03-22"
//         }

//       },

//       {
//         "SSN": 152,
//         "bookInfo":{
//           "CarriageId": 5,
//           "SeatNum": 88,
//            "Price": 12500,
//           "Adult": 1
//         },

//         "passengerInfo":{
//           "Fname": "Vasili",
//           "Lname": "Zaycev",
//           "PhoneNum": 3475,
//           "Email": "esnow@nu.edu.kz",
//           "Birthday": "1981-03-22"
//         }

//       }

//     ]
// }

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
              CarriageId: wagon,
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
  }

  handleChange = (e, ind) => {
    const { name, value } = e.target
    console.log(name, value)
    this.setState(state => {
      const npsgs = [...state.passangers]
      if (name === 'SSN') {
        npsgs[ind][name] = value
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
    return (
      <div className="add-passenger">
        <form onSubmit={this.handleSubmit}>
          {form}
          <button
            type="submit"
            class="btn btn--primary mb-4"
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
  }
}

const mapDispathToProps = dispatch => ({
  signIn: (credentials, history) =>
    dispatch(bookTicketAction(credentials, history)),
})

export default connect(mapStateToProps, mapDispathToProps)(AddPassenger)
