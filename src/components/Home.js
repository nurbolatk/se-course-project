import React, { Component } from "react";
import { connect } from "react-redux";
import { getStationsAction } from "../actions/stationActions";

export class Home extends Component {
  componentDidMount() {
    this.props.getStations();
  }
  render() {
    return <div className="">Home page future place</div>;
  }
}

export default connect(
  null,
  getStationsAction
)(Home);
