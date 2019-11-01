import React, { Component } from 'react'

class AddPassangerForm extends Component {
  render() {
    const { handleChange, ind } = this.props
    return (
      <div className='card mb-4'>
        <div className='card-body'>
          <h3 className='card-title pt-3 pb-4'>Add a passenger</h3>
          <div>
            <div className='form-group'>
              <input
                type='text'
                name='SSN'
                value={this.props.psg.SSN}
                className='form-control'
                id='SSN'
                onChange={e => handleChange(e, ind)}
                placeholder='Social Security Number'
                required
              />
            </div>
            <div className='form-row'>
              <div class='col'>
                <div className='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    id='Fname'
                    name='Fname'
                    value={this.props.psg.Fname}
                    placeholder='First Name'
                    onChange={e => handleChange(e, ind)}
                    required
                  />
                </div>
              </div>
              <div class='col'>
                <div className='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    id='Lname'
                    name='Lname'
                    value={this.props.psg.Lname}
                    placeholder='Last Name'
                    onChange={e => handleChange(e, ind)}
                    required
                  />
                </div>
              </div>
            </div>
            <div class='form-group'>
              <input
                type='email'
                name='Email'
                value={this.props.psg.Email}
                class='form-control'
                id='inputEmail4'
                placeholder='Email'
                onChange={e => handleChange(e, ind)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='PhoneNum'>
                Enter a telephone number (in the form xxxx-xxx-xx-xx):{' '}
              </label>
              <input
                type='tel'
                name='PhoneNum'
                value={this.props.psg.PhoneNum}
                className='form-control'
                id='PhoneNum'
                pattern='[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                onChange={e => handleChange(e, ind)}
              />
              <span className='validity'></span>
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='Birthday'
                value={this.props.psg.Birthday}
                className='form-control'
                id='Birthday'
                onChange={e => handleChange(e, ind)}
                pattern='[1-2][0-9]{3}-[0-9]{2}-[0-9]{2}'
                placeholder='1980-07-22'
                required
              />
            </div>

            <button type='submit' class='btn btn-primary w-100'>
              Add Passenger
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPassangerForm
