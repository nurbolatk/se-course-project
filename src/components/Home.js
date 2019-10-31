import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getStationsAction } from '../actions/stationActions'
import { searchRoutesAction } from '../actions/routeActions'

export class Home extends Component {
  state = {
    from: '',
    to: '',
    date: '',
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
        from,
        to,
        date,
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
  render() {
    return (
      <div className='home-page'>
        <form onSubmit={this.handleSubmit} className='container mt-5'>
          <h1 className='text-center mb-5'>Qazaqstan Temir Zholy</h1>
          <div className='mt-5 form-group d-flex'>
            <input
              type='text'
              className='form-control'
              name='from'
              placeholder='From'
              value={this.state.from}
              onChange={this.onChange}
            />
            <input
              type='text'
              className='form-control'
              name='to'
              placeholder='To'
              value={this.state.to}
              onChange={this.onChange}
            />
            <input
              type='text'
              className='form-control'
              name='date'
              placeholder='Date'
              value={this.state.date}
              onChange={this.onChange}
            />
            <button type='submit' className='btn btn-primary'>
              Search
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const getStations = getStationsAction(dispatch).getStations
  const searchRoutes = (params, history) => dispatch(searchRoutesAction(params, history))
  return {
    getStations,
    searchRoutes,
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Home)
)
