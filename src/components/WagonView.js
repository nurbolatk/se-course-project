import React, { Component } from 'react'

class WagonView extends Component {
  toggleSeat = ({ target }) => {
    const { wagon, wagonNum, selectSeat, deselectSeat } = this.props
    if (target.classList.contains('btn-primary')) {
      target.classList.remove('btn-primary')
      target.classList.add('btn-outline-secondary')
      deselectSeat(wagonNum, target.textContent)
    } else {
      target.classList.add('btn-primary')
      target.classList.remove('btn-outline-secondary')
      selectSeat(wagonNum, target.textContent)
    }
  }
  render() {
    const { wagon, wagonNum, selectSeat } = this.props
    const seats = [...Array(wagon.AvailableSeats).keys()]
    const table = []
    switch (wagon.Type) {
      case 'coupe':
        const top = []
        const bot = []
        for (let i = 0; i < seats.length; i += 2) {
          top.push(
            <td>
              <button
                type='button'
                onClick={this.toggleSeat}
                class='btn btn-sm btn-outline-secondary'>
                {i + 1}
              </button>
            </td>
          )
        }
        for (let i = 1; i < seats.length; i += 2) {
          bot.push(
            <td>
              <button
                type='button'
                onClick={this.toggleSeat}
                class='btn btn-sm btn-outline-secondary'>
                {i + 1}
              </button>
            </td>
          )
        }
        table.push(
          <tr>
            <th scope='row'>top</th>
            {top}
          </tr>
        )
        table.push(
          <tr>
            <th scope='row'>bottom</th>
            {bot}
          </tr>
        )
        break
      case 'placzcart':
        const sideNum = Math.floor(wagon.AvailableSeats / 3)
        const topP = []
        const botP = []
        const side = []
        for (let i = 0; i < wagon.AvailableSeats - sideNum; i += 2) {
          topP.push(
            <td>
              <button
                type='button'
                onClick={this.toggleSeat}
                class='btn btn-sm btn-outline-secondary'>
                {i + 1}
              </button>
            </td>
          )
        }
        for (let i = 1; i < wagon.AvailableSeats - sideNum; i += 2) {
          botP.push(
            <td>
              <button
                type='button'
                onClick={this.toggleSeat}
                class='btn btn-sm btn-outline-secondary'>
                {i + 1}
              </button>
            </td>
          )
        }
        for (let i = wagon.AvailableSeats - sideNum; i < wagon.AvailableSeats; i++) {
          side.push(
            <td>
              <button
                type='button'
                onClick={this.toggleSeat}
                class='btn btn-sm btn-outline-secondary'>
                {i + 1}
              </button>
            </td>
          )
        }
        table.push(
          <tr>
            <th scope='row'>top</th>
            {topP}
          </tr>
        )
        table.push(
          <tr>
            <th scope='row'>bottom</th>
            {botP}
          </tr>
        )
        table.push(
          <tr>
            <th scope='row'>side</th>
            {side}
          </tr>
        )
        break
      default:
        console.log('pwlnah')
        break
    }
    return (
      <div>
        <p>Please choose seat number:</p>
        <table class='table table-borderless w-auto'>
          <tbody>{table}</tbody>
        </table>
      </div>
    )
  }
}

export default WagonView
