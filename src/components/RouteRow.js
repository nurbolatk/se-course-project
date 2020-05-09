import React, { Component } from 'react'
import Select from 'react-select'
import DropDownSearch from './DropDownSearch'
import DateInput from './DateInput'

const format = 'YYYY-MM-DD HH:mm'

class RouteRow extends Component {
  state = {
    chosenStation: null,
    dateOfArrival: '',
    dateOfDeparture: '',
  }
  chooseStation = (station, ind, origin, destination) => {
    this.props.onSelectStation(ind, station.value, origin, destination)
  }
  chooseDate = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    const {
      origin,
      destination,
      removeStation,
      ind,
      state,
      onSelectArrTime,
      onSelectDepTime,
    } = this.props
    const text = origin
      ? 'Select first station'
      : destination
      ? 'Select last station'
      : 'Select station'
    const stationChangeFunction = station => {
      this.chooseStation(station, ind, origin, destination)
    }
    const arrTimeChangeFunction = e => {
      onSelectArrTime(ind, e.target.value, origin, destination)
    }
    const depTimeChangeFunction = e => {
      onSelectDepTime(ind, e.target.value, origin, destination)
    }
    return (
      <div className="form__row">
        <div className="add-station-name">
          <label htmlFor="Station">{text}</label>
          <DropDownSearch
            placeholder="Station name"
            selectItem={stationChangeFunction}
            items={this.props.options}
          />
        </div>
        {!origin && (
          <div className="add-station-arr">
            <label htmlFor="Station">Date and time of arrival</label>
            {/* <input
            type="text"
            className="form-control"
            id="Station"
            placeholder={format}
            value={state.arrTime}
            name="dateOfArrival"
            onChange={arrTimeChangeFunction}
          /> */}
            <DateInput date={state.date} selectDate={arrTimeChangeFunction} />
          </div>
        )}
        {!destination && (
          <div className="add-station-dep">
            <label htmlFor="Station">Date and time of departure</label>
            {/* <input
            type="text"
            className="form-control"
            id="Station"
            placeholder={format}
            value={state.depTime}
            name="dateOfDeparture"
            onChange={depTimeChangeFunction}
          /> */}
            <DateInput
              date={this.state.date}
              selectDate={depTimeChangeFunction}
            />
          </div>
        )}
        {!origin && !destination && (
          <>
            <button
              type="button"
              className="btn btn--primary remove-row"
              onClick={e => removeStation(e, ind)}
            >
              X
            </button>
          </>
        )}
      </div>
    )
  }
}

export default RouteRow
