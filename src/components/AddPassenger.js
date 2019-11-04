import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import { connect } from 'react-redux'
import AddPassangerForm from './AddPassangerForm'
import Spinner from './Spinner'
import { bookTicketAction } from '../actions/ticketAction'

class AddPassenger extends Component {
  constructor(props) {
    super(props)
    const { seats } = this.props
    const passangers = []
    for (const wagon in seats) {
      if (seats.hasOwnProperty(wagon)) {
        const seatNums = seats[wagon]
        seatNums.forEach(seat => {
          passangers.push({
            SSN: '',
            Fname: '',
            Lname: '',
            PhoneNum: null,
            Email: '',
            Birthday: '',
          })
        })
      }
    }
    this.state = {
      passangers,
    }
  }
  state = {
    passangers: [
      {
        SSN: '',
        Fname: '',
        Lname: '',
        PhoneNum: null,
        Email: '',
        Birthday: '',
      },
    ],
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = (e, ind) => {
    const { name, value } = e.target
    console.log(name, value)
    this.setState(state => {
      const npsgs = [...state.passangers]
      npsgs[ind][name] = value
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
      <div className='d-flex mt-5 flex-fill justify-content-center align-items-center flex-column'>
        <form onSubmit={this.handleSubmit}>
          {form}
          <button type='submit' class='btn btn-primary w-100 mb-5' disabled={isLoading}>
            {isLoading ? <Spinner type='small' /> : 'Book Tickets'}
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
  signIn: (credentials, history) => dispatch(bookTicketAction(credentials, history)),
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(AddPassenger)
