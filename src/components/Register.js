import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="d-flex flex-fill justify-content-center align-items-center">
        <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title">Create an account</h3>
            <form>
              <div className="form-row">
                <div class="col">
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
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
