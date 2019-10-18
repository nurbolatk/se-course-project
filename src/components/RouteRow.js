import React, { Component } from "react";
import Select from "react-select";

const format = "YYYY-MM-DD HH:mm";

class RouteRow extends Component {
  state = {
    chosenStation: null,
    dateOfArrival: "",
    dateOfDeparture: ""
  };
  chooseStation = (station, ind, origin, destination) => {
    this.props.onSelectStation(ind, station.value, origin, destination);
  };
  chooseDate = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const {
      origin,
      destination,
      removeStation,
      ind,
      state,
      onSelectArrTime,
      onSelectDepTime
    } = this.props;
    const text = origin
      ? "Select first station"
      : destination
      ? "Select last station"
      : "Select station";
    const stationChangeFunction = station => {
      this.chooseStation(station, ind, origin, destination);
    };
    const arrTimeChangeFunction = e => {
      onSelectArrTime(ind, e.target.value, origin, destination);
    };
    const depTimeChangeFunction = e => {
      onSelectDepTime(ind, e.target.value, origin, destination);
    };
    return (
      <div className="form-row">
        <div className="col-5">
          <div className="form-group">
            <label htmlFor="Station">{text}</label>
            <Select
              options={this.props.options}
              onChange={stationChangeFunction}
            />
          </div>
        </div>
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="Station">Date and time of arrival</label>
            <input
              type="text"
              className="form-control"
              id="Station"
              placeholder={format}
              value={state.arrTime}
              name="dateOfArrival"
              onChange={arrTimeChangeFunction}
            />
          </div>
        </div>
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="Station">Date and time of departure</label>
            <input
              type="text"
              className="form-control"
              id="Station"
              placeholder={format}
              value={state.depTime}
              name="dateOfDeparture"
              onChange={depTimeChangeFunction}
            />
          </div>
        </div>
        <div className="col-1">
          {!origin && !destination && (
            <>
              <button
                type="button"
                className="btn btn-danger"
                onClick={e => removeStation(e, ind)}
              >
                X
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default RouteRow;
