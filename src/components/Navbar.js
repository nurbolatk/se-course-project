import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutAction } from "../actions/authActions";

const Navbar = props => {
  const { user } = props.auth;
  const adminLinks = user && user.roles.includes("ADMIN") && (
    <li className="nav-item ml-auto">
      <Link className="nav-link" to="/administration">
        Admin panel
      </Link>
    </li>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Akatsuki
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100 align-items-center">
            {user ? (
              <>
                {adminLinks}
                <li className="nav-item ">
                  <Link className="nav-link" to="/sign-in">
                    {user.email}
                  </Link>
                </li>
                <li className="nav-item ">
                  <button
                    className="btn btn-link nav-link"
                    href="#"
                    onClick={() => props.logOut(props.history)}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ml-auto">
                  <Link className="nav-link" to="/sign-in">
                    Sign in
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/sign-up">
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

export default withRouter(
  connect(
    mapStateToProps,
    logOutAction
  )(Navbar)
);
