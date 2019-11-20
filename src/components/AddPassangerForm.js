import React, { Component } from 'react'

class AddPassangerForm extends Component {
  render() {
    const { handleChange, ind, wagon, seatNum } = this.props
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h3>
            Add a passenger to seat #{seatNum} in wagon #{parseInt(wagon)}
          </h3>
          <div>
            <div className="form__group">
              <input
                type="number"
                name="SSN"
                value={this.props.psg.SSN}
                className="form__input"
                id="SSN"
                onChange={e => handleChange(e, ind)}
                placeholder="Social Security Number"
                required
              />
            </div>
            <div className="form__row">
              <div className="form__group">
                <input
                  type="text"
                  class="form__input"
                  id="Fname"
                  name="Fname"
                  value={this.props.psg.Fname}
                  placeholder="First Name"
                  onChange={e => handleChange(e, ind)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  class="form__input"
                  id="Lname"
                  name="Lname"
                  value={this.props.psg.Lname}
                  placeholder="Last Name"
                  onChange={e => handleChange(e, ind)}
                  required
                />
              </div>
            </div>
            <div class="form__group">
              <input
                type="email"
                name="Email"
                value={this.props.psg.Email}
                class="form__input"
                id="inputEmail4"
                placeholder="Email"
                onChange={e => handleChange(e, ind)}
              />
            </div>
            <div className="form__group">
              <label htmlFor="PhoneNum">
                Enter a telephone number (in the form xxxx-xxx-xx-xx):
              </label>
              <input
                type="tel"
                name="PhoneNum"
                value={this.props.psg.PhoneNum}
                className="form__input"
                id="PhoneNum"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                onChange={e => handleChange(e, ind)}
              />
              <span className="validity"></span>
            </div>
            <label htmlFor="Birthday">Birthday</label>
            <div className="form__group">
              <input
                type="text"
                name="Birthday"
                value={this.props.psg.Birthday}
                className="form__input"
                id="Birthday"
                onChange={e => handleChange(e, ind)}
                pattern="[1-2][0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="1980-07-22"
                required
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPassangerForm
