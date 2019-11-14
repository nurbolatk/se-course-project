import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    notImplementedAlert: false,
  }
  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.notImplementedAlert) {
      this.setState({
        notImplementedAlert: true,
      })
      setTimeout(() => {
        this.setState({
          notImplementedAlert: false,
        })
      }, 3000)
    }
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
    const notImplementedAlert = this.state.notImplementedAlert && (
      <Alert
        type="warning"
        msg="This feature not implemented yet!"
        additional="w-50"
        close={this.closeNotImplementedAlert}
      />
    )
    return (
      <div className="signin">
        {notImplementedAlert}
        <div className="card">
          <h2 className="card__title">Create an account</h2>
          <form onSubmit={this.handleSubmit} className="signup">
            <div className="signup__row">
              <div className="form__group">
                <input
                  type="text"
                  class="form__input"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  class="form__input"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="form__group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                class="form__input"
                id="inputEmail4"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div class="form__group">
              <input
                type="password"
                name="password"
                value={this.state.password}
                class="form__input"
                id="inputPassword4"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" class="btn btn--primary mb-3">
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

export default Register
