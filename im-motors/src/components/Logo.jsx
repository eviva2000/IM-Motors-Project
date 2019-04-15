import React, { Component } from "react";
import MotorsLogo from "../assets/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <img className="logoImage" src={MotorsLogo} alt={"Hen in the house"} />
    );
  }
}
