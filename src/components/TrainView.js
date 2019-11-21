import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WagonView from './WagonView'
import { saveSeatsAction } from '../actions/seatActions'

class TrainView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seats: this.props.seats,
      yaVsegdaPomnu: 'o glavnom',
    }
  }
  // selectSeat = (wagon, seat) => {
  //   this.setState(state => {
  //     const newSeats = { ...state.seats }
  //     if (!Array.isArray(newSeats[wagon])) {
  //       newSeats[wagon] = []
  //     }
  //     newSeats[wagon].push(parseInt(seat) + 1)
  //     return {
  //       seats: newSeats,
  //     }
  //   })
  // }
  // deselectSeat = (wagon, seat) => {
  //   this.setState(state => {
  //     const newSeats = state.seats[wagon].filter(s => s - 1 != seat)
  //     return {
  //       seats: { ...state.seats, [wagon]: newSeats },
  //     }
  //   })
  // }
  selectSeat = (wagon, seat) => {
    this.setState(state => {
      const newSeats = { ...state.seats }
      if (!Array.isArray(newSeats[wagon])) {
        newSeats[wagon] = []
      }
      newSeats[wagon].push(parseInt(seat))
      return {
        seats: newSeats,
      }
    })
  }
  deselectSeat = (wagon, seat) => {
    this.setState(state => {
      const newSeats = state.seats[wagon].filter(s => s != seat)
      if (newSeats.length === 0) {
        const seats = { ...state.seats }
        delete seats[wagon]
        return {
          seats,
        }
      }
      return {
        seats: { ...state.seats, [wagon]: newSeats },
      }
    })
  }
  saveSeats = () => {
    this.props.saveSeats(this.state.seats, this.props.history)
  }
  render() {
    const route = this.props.route
    console.log('found', route)
    return (
      <div className="train-view">
        <div className="card mb-2">
          <div className="train-view__header">
            <h2>Pick wagon(s) and seat(s)</h2>
            <button
              className="btn btn--primary btn--side"
              onClick={this.saveSeats}
              disabled={Object.keys(this.state.seats).length === 0}
            >
              Next
            </button>
          </div>
        </div>
        {route.carriages
          .filter(carriage => carriage.Type === this.props.wType)
          .map((w, i) => (
            <div className="card mb-2" key={i}>
              <h4 className="mb-1">
                Wagon #{w.CarriageId}: {w.Type}
              </h4>
              <WagonView
                wagon={w}
                selectSeat={this.selectSeat}
                deselectSeat={this.deselectSeat}
                wagonNum={i}
                seats={this.props.seats[w.CarriageId]}
              />
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    route: state.route.route,
    wType: state.route.wType,
    seats: state.seat.seats,
  }
}

const mapDispatchToProps = dispatch => ({
  saveSeats: (seats, history) => dispatch(saveSeatsAction(seats, history)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrainView)
)
