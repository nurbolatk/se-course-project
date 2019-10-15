import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false
  };
  signIn = e => {
    e.preventDefault();
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
    return (
      <div className="d-flex flex-fill justify-content-center align-items-center">
        <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title">Sign in</h3>
            <form>
              <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    checked={this.state.remember}
                    name="remember"
                    onChange={this.handleChange}
                  />
                  <label class="form-check-label" for="gridCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                onClick={this.signIn}
                type="submit"
                class="btn btn-primary w-100"
              >
                Sign in
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

export default Signin;
