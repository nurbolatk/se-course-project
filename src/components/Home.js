import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getStationsAction } from '../actions/stationActions'
import { searchRoutesAction } from '../actions/routeActions'
import Select from 'react-select'
import DropDownSearch from './DropDownSearch'
import DateInput from './DateInput'
import moment from 'moment'

export class Home extends Component {
  state = {
    from: '',
    to: '',
    date: '',
  }
  componentDidMount() {
    this.props.getStations()
  }
  handleSubmit = e => {
    e.preventDefault()
    const { from, to, date } = this.state
    const dateInCorrectFormat = moment(date).format('YYYY-MM-DD')
    this.props.searchRoutes(
      {
        arrivalStationId: from.value,
        destinationStationId: to.value,
        date: dateInCorrectFormat,
      },
      this.props.history
    )
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  selectFrom = station => {
    console.log(station)
    this.setState({ from: station })
  }
  selectTo = station => {
    console.log(station)
    this.setState({ to: station })
  }
  selectDate = e => {
    const { value } = e.target
    this.setState({ date: value })
  }
  render() {
    return (
      <>
        <div className="home">
          <div className=" card">
            <h3 className="card__title">Search for the tickets</h3>
            <form onSubmit={this.handleSubmit} className="search">
              <DropDownSearch
                placeholder="From"
                selectItem={this.selectFrom}
                items={this.props.stations}
              />
              <DropDownSearch
                placeholder="To"
                selectItem={this.selectTo}
                items={this.props.stations}
              />
              <DateInput date={this.state.date} selectDate={this.selectDate} />
              <button className="btn btn--primary">Search</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.station.stations,
  }
}

const mapDispatchToProps = dispatch => {
  const getStations = getStationsAction(dispatch).getStations
  const searchRoutes = (params, history) =>
    dispatch(searchRoutesAction(params, history))
  return {
    getStations,
    searchRoutes,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
