import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerAction } from '../actions/authActions'
import Alert from './Alert'

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.register(
      {
        fname: this.state.firstName,
        lname: this.state.lastName,
        password: this.state.password,
        email: this.state.email,
      },
      this.props.history
    )
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  closeNotImplementedAlert = () => {
    this.setState({
      notImplementedAlert: false,
    })
  }
  render() {
    return (
      <div className="signin">
        <div className="card">
          <h2 className="card__title">Create an account</h2>
          <form onSubmit={this.handleSubmit} className="signup">
            <div className="form__row">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="form__input"
                id="inputEmail4"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                value={this.state.password}
                className="form__input"
                id="inputPassword4"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary mb-3">
              Sign up
            </button>
            <Link to="/sign-in" className="signin__link">
              Already have an account? Sign in!
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispathToProps = dispatch => ({
  register: (credentials, history) =>
    dispatch(registerAction(credentials, history)),
})

export default withRouter(connect(null, mapDispathToProps)(Register))
