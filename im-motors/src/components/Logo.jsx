import React, { Component } from "react";
import MotorsLogo from "../assets/blacklogo.png";

export default class Logo extends Component {
  render() {
    return (
      <img className="logoImage" src={MotorsLogo} alt={"IM Motors logo"} />
    );
  }
}
