import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getStationsAction } from "../actions/stationActions"
import { searchRoutesAction } from "../actions/routeActions"
import Select from "react-select"
import DropDownSearch from "./DropDownSearch"

export class Home extends Component {
  state = {
    from: "",
    to: "",
    date: ""
  }
  componentDidMount() {
    console.log(this.props)
    this.props.getStations()
  }
  handleSubmit = e => {
    e.preventDefault()
    const { from, to, date } = this.state
    this.props.searchRoutes(
      {
        arrivalStationId: from.value,
        destinationStationId: to.value,
        date
      },
      this.props.history
    )
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  selectStation = (station, isFrom) => {
    if (isFrom) {
      this.setState({ from: station })
    } else {
      this.setState({ to: station })
    }
  }
  render() {
    return (
      <>
        <main>
          <div className=" card">
            <h3 className="h3">Search for the tickets</h3>
            <form onSubmit={this.handleSubmit} className="search">
              <DropDownSearch placeholder="From" items={this.props.stations} />
              <DropDownSearch placeholder="To" items={this.props.stations} />
              <input
                type="datetime"
                className="form__input"
                placeholder="Date"
              />
              <button className="btn btn--primary">Search</button>
            </form>
          </div>
        </main>
        {/* <form onSubmit={this.handleSubmit} className="container mt-5">
          <h1 className="text-center mb-5">Qazaqstan Temir Zholy</h1>
          <div className="mt-5 row">
            <div className="col">
              <Select
                onChange={station => this.selectStation(station, true)}
                options={this.props.stations}
              />
            </div>
            <div className="col">
              <Select
                onChange={station => this.selectStation(station)}
                options={this.props.stations}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form> */}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.station.stations
  }
}

const mapDispatchToProps = dispatch => {
  const getStations = getStationsAction(dispatch).getStations
  const searchRoutes = (params, history) =>
    dispatch(searchRoutesAction(params, history))
  return {
    getStations,
    searchRoutes
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
