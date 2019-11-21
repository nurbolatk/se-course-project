import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutAction } from '../actions/authActions'

const Navbar = props => {
  const { user } = props.auth
  const adminLinks = user &&
    user.roles &&
    user.roles.some(role => role === 'ROLE_MANAGER') && (
      <div className="navbar__item">
        <Link className="nav-navbar__link" to="/administration">
          Admin panel
        </Link>
      </div>
    )
  return (
    <>
      <header className="header">
        <div className="logo-box">
          <Link className="logo" to="/">
            Akatsuki
          </Link>
        </div>
        <nav className="navbar">
          {user ? (
            <>
              {adminLinks}
              <div className="navbar__item ">
                <Link className="navbar__link" to="/add-station">
                  Add Station
                </Link>
              </div>
              <div className="navbar__item ">
                <Link className="navbar__link" to="/add-route">
                  Add Route
                </Link>
              </div>
              <div className="navbar__item ">
                <Link className="navbar__link" to="/sign-in">
                  {user.email}
                </Link>
              </div>
              <div className="navbar__item ">
                <button
                  className="btn btn--link navbar__link"
                  href="#"
                  onClick={() => props.logOut(props.history)}
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="navbar__item">
                <Link className="navbar__link" to="/sign-in">
                  Sign in
                </Link>
              </div>
              <div className="navbar__item ">
                <Link className="navbar__link" to="/sign-up">
                  Sign up
                </Link>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default withRouter(connect(mapStateToProps, logOutAction)(Navbar))
