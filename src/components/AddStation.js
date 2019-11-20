import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStationAction } from '../actions/stationActions'

class AddStation extends Component {
  state = {
    name: '',
    city: '',
    lat: '',
    lon: '',
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Adding this station!', this.state)
    this.props.addStation(this.state)
  }
  hanldeChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <div className="add-station">
        <div className="card ">
          <h2 className="card__title">Add new station</h2>
          <form className="add-station__form" onSubmit={this.handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Station name"
                onChange={this.hanldeChange}
                value={this.state.Name}
                name="name"
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Station city"
                onChange={this.hanldeChange}
                value={this.state.City}
                name="city"
              />
            </div>
            <div className="form__row">
              <div className="form__group">
                <input
                  type="text"
                  id="lat"
                  className="form__input"
                  placeholder="Lattitude"
                  onChange={this.hanldeChange}
                  value={this.state.Lat}
                  name="lat"
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  id="lat"
                  className="form__input"
                  placeholder="Longitude"
                  onChange={this.hanldeChange}
                  value={this.state.Lon}
                  name="lon"
                />
              </div>
            </div>
            <button type="submit" class="btn btn--primary">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    station: state.station,
  }
}

export default connect(mapStateToProps, addStationAction)(AddStation)
