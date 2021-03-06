import React, { Component } from 'react'

class WagonView extends Component {
  toggleSeat = ({ target }) => {
    const { wagon, selectSeat, deselectSeat } = this.props
    if (target.classList.contains('btn--primary')) {
      target.classList.remove('btn--primary')
      target.classList.add('btn--secondary--outline')
      deselectSeat(wagon.CarriageId, target.textContent)
    } else {
      target.classList.add('btn--primary')
      target.classList.remove('btn--secondary--outline')
      selectSeat(wagon.CarriageId, target.textContent)
    }
  }
  render() {
    const { wagon, wagonNum, selectSeat, seats } = this.props
    const table = []
    switch (wagon.Type.toLowerCase()) {
      case 'coupe':
        const top = []
        const bot = []
        for (let i = 1; i < 21; i += 2) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          top.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        for (let i = 2; i < 21; i += 2) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          bot.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        table.push(
          <tr>
            <th scope="row">top</th>
            {top}
          </tr>
        )
        table.push(
          <tr>
            <th scope="row">bottom</th>
            {bot}
          </tr>
        )
        break
      case 'platzcard':
        const sideNum = 10
        const topP = []
        const botP = []
        const side = []
        for (let i = 1; i < 21; i += 2) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          topP.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        for (let i = 2; i < 21; i += 2) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          botP.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        for (let i = 21; i < 31; i++) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          side.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        table.push(
          <tr>
            <th scope="row">top</th>
            {topP}
          </tr>
        )
        table.push(
          <tr>
            <th scope="row">bottom</th>
            {botP}
          </tr>
        )
        table.push(<tr className="spacer"></tr>)
        table.push(
          <tr>
            <th scope="row side">side</th>
            {side}
          </tr>
        )
        break
      case 'lux':
        const botL = []
        for (let i = 1; i < 11; i++) {
          const booked = wagon.BookedSeats.some(seat => seat === i)
          const chosen = seats && seats.some(seat => seat === i)
          botL.push(
            <td>
              <button
                type="button"
                onClick={this.toggleSeat}
                className={`btn btn--${
                  chosen
                    ? 'primary'
                    : booked
                    ? 'secondary'
                    : 'secondary--outline'
                }`}
                disabled={booked}
              >
                {i}
              </button>
            </td>
          )
        }
        table.push(
          <tr>
            <th scope="row">bottom</th>
            {botL}
          </tr>
        )
        break
      default:
        console.log('pwlnah')
        break
    }
    return (
      <div className="wagon-view">
        <table className="table table-borderless w-auto">
          <tbody>{table}</tbody>
        </table>
      </div>
    )
  }
}

export default WagonView
