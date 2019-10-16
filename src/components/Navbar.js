import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../actions";

const Navbar = props => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Akatsuki
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100">
            {props.auth.id ? (
              <>
                <li class="nav-item ml-auto">
                  <Link class="nav-link" to="/sign-in">
                    {props.auth.email}
                  </Link>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#" onClick={props.logOut}>
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item ml-auto">
                  <Link class="nav-link" to="/sign-in">
                    Sign in
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispathToProps = dispatch => {
  return {
    logOut: () => dispatch({ type: LOGOUT })
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Navbar);
