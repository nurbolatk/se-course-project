import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signInAction } from "../actions/authActions";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false
  };
  signIn = e => {
    e.preventDefault();
    const { email, password, remember } = this.state;
    this.props.signIn({ email, password, remember }, this.props.history);
  };
  handleChange = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { isFetching } = this.props;
    return (
      <div className="d-flex flex-fill justify-content-center align-items-center">
        <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title pt-3 pb-4">Sign in</h3>
            <form onSubmit={this.signIn}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  disabled={isFetching}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  disabled={isFetching}
                />
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    checked={this.state.remember}
                    name="remember"
                    onChange={this.handleChange}
                    disabled={isFetching}
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isFetching}
              >
                {isFetching ? "Please wait" : "Sign in"}
              </button>
              <hr />
              <Link
                to="/sign-up"
                className="text-center small text-muted w-100 d-block"
              >
                Don't have an account? Create one!
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching
});

const mapDispathToProps = dispatch => ({
  signIn: (credentials, history) => dispatch(signInAction(credentials, history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(Signin)
);
