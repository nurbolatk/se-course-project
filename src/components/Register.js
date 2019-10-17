import React, { Component } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    notImplementedAlert: false
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.notImplementedAlert) {
      this.setState({
        notImplementedAlert: true
      });
      setTimeout(() => {
        this.setState({
          notImplementedAlert: false
        });
      }, 3000);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  closeNotImplementedAlert = () => {
    this.setState({
      notImplementedAlert: false
    });
  };
  render() {
    const notImplementedAlert = this.state.notImplementedAlert && (
      <Alert
        type="warning"
        msg="This feature not implemented yet!"
        additional="w-50"
        close={this.closeNotImplementedAlert}
      />
    );
    return (
      <div className="d-flex flex-fill justify-content-center align-items-center flex-column">
        {notImplementedAlert}
        <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title pt-3 pb-4">Create an account</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div class="col">
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Last Name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Sign up
              </button>
              <hr />
              <Link
                to="/sign-in"
                className="text-center small text-muted w-100 d-block"
              >
                Already have an account? Sign in!
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
