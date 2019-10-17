import React, { Component } from "react";
import Select from "react-select";
import moment from "moment";

const format = "DD/MM/YY HH:mm";

export class AddRoute extends Component {
  state = {
    options: [
      { value: 1, label: "Almaty 1" },
      { value: 2, label: "Almaty 2" },
      { value: 3, label: "Nur-Sultan 1" },
      { value: 4, label: "Nur-Sultan Nurly Zhol" }
    ],
    chosenStation: null,
    dateOfArrival: "",
    dateOfDeparture: ""
  };
  chooseStation = station => {
    this.setState({ chosenStation: station });
  };
  chooseDate = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  saveRoute = e => {
    e.preventDefault();
    if (!this.state.chosenStation) {
      alert("Please select the station!");
      return;
    }
    const arrival = moment(this.state.dateOfArrival, format, true);
    const departure = moment(
      this.state.dateOfDeparture,
      "DD/MM/YY HH:mm",
      true
    );
    const now = moment();
    if (arrival.format() === "Invalid date") {
      alert("Arrival must be in correct format!");
      return;
    }
    if (departure.format() === "Invalid date") {
      alert("Departure must be in correct format!");
      return;
    }
    if (now.isAfter(arrival)) {
      alert("Your arrival date should be after now!");
      return;
    }
    if (departure.isBefore(arrival)) {
      alert("Your departure date should be after arrival!");
      return;
    }
    const res = {
      stationId: this.state.chosenStation.value,
      arrival: this.state.dateOfArrival,
      departure: this.state.dateOfDeparture
    };
    console.log(res);
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">Create new route</h5>
            <form onSubmit={this.saveRoute}>
              <div className="form-group">
                <label htmlFor="Station">Select station</label>
                <Select
                  options={this.state.options}
                  onChange={this.chooseStation}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Station">Select date and time of arrival</label>
                <input
                  type="text"
                  className="form-control"
                  id="Station"
                  placeholder={format}
                  value={this.state.dateOfArrival}
                  name="dateOfArrival"
                  onChange={this.chooseDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Station">
                  Select date and time of departure
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Station"
                  placeholder={format}
                  value={this.state.dateOfDeparture}
                  name="dateOfDeparture"
                  onChange={this.chooseDate}
                />
              </div>
              <button className="btn btn-primary ">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRoute;
