import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInAction } from '../actions/authActions'
import Spinner from './Spinner'
import Alert from './Alert'

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }
  signIn = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.signIn({ username: email, password }, this.props.history)
  }
  handleChange = e => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  render() {
    const { isFetching, error } = this.props
    const alert = error && <Alert msg={error} />
    return (
      <div className="signin">
        {alert}
        <div className="card">
          <h2 className="card__title">Sign in</h2>
          <form onSubmit={this.signIn}>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                disabled={isFetching}
                required
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                disabled={isFetching}
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary mb-3"
              disabled={isFetching}
            >
              {isFetching ? <Spinner type="small" /> : 'Sign in'}
            </button>
            <Link to="/sign-up" className="signin__link">
              Don't have an account? Create one!
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.error.auth,
})

const mapDispathToProps = dispatch => ({
  signIn: (credentials, history) =>
    dispatch(signInAction(credentials, history)),
})

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Signin))
