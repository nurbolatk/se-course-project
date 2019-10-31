import React, { Component } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";

class AddPassenger extends Component {
    state = {
        SSN: "",
        Fname: "",
        Lname: "",
        PhoneNum: null,
        Email: "",
        Birthday: ""
    };
    handleSubmit = e => {
        e.preventDefault();

    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="d-flex flex-fill justify-content-center align-items-center flex-column">
                <div className="card w-50">
                    <div className="card-body">
                        <h3 className="card-title pt-3 pb-4">Add a passenger</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="SSN"
                                    value={this.state.SSN}
                                    className="form-control"
                                    id="SSN"
                                    onChange={this.handleChange}
                                    placeholder="Social Security Number"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div class="col">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="Fname"
                                            name="Fname"
                                            value={this.state.Fname}
                                            placeholder="First Name"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="Lname"
                                            name="Lname"
                                            value={this.state.Lname}
                                            placeholder="Last Name"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    name="Email"
                                    value={this.state.Email}
                                    class="form-control"
                                    id="inputEmail4"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PhoneNum">Enter a telephone number (in the form xxxx-xxx-xx-xx): </label>
                                <input
                                    type="tel"
                                    name="PhoneNum"
                                    value={this.state.PhoneNum}
                                    className="form-control"
                                    id="PhoneNum"
                                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                    onChange={this.handleChange}
                                />
                                <span className="validity"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Birthday"
                                    value={this.state.Birthday}
                                    className="form-control"
                                    id="Birthday"
                                    onChange={this.handleChange}
                                    pattern="[1-2][0-9]{3}-[0-9]{2}-[0-9]{2}"
                                    placeholder="1980-07-22"
                                    required
                                />
                            </div>

                            <button type="submit" class="btn btn-primary w-100">
                                Add Passenger
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPassenger;
