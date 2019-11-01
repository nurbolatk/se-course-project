import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WagonView from './WagonView'
import { saveSeatsAction } from '../actions/seatActions'

class TrainView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seats: {},
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
    const route = this.props.routes.find(r => '' + r.RouteId === this.props.match.params.route_id)

    return (
      <div className='container mt-5'>
        <div className=''>
          <div className='card mb-4'>
            <div className='card-body d-flex justify-content-between '>
              <h4 className='card-title d-inline-block '>Pick wagon(s) and seat(s)</h4>
              <button
                className='btn btn-primary'
                onClick={this.saveSeats}
                disabled={Object.keys(this.state.seats).length === 0}>
                Next
              </button>
            </div>
          </div>
          {route.carriages.map((w, i) => (
            <div className='card mb-4' key={i}>
              <div className='card-body'>
                <h5 className='card-title'>
                  Wagon #{i + 1}: {w.Type}
                </h5>
                <WagonView
                  wagon={w}
                  selectSeat={this.selectSeat}
                  deselectSeat={this.deselectSeat}
                  wagonNum={i}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.route.routes,
  }
}

const mapDispatchToProps = dispatch => ({
  saveSeats: (seats, history) => dispatch(saveSeatsAction(seats, history)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrainView)
)
