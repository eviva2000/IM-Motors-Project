import React, { Component } from "react";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import ToggleButton from "./BurgerMenu/TogglerMenuButton";
export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Menu />
        <ToggleButton click={this.props.handleSlide} />
        <h1>We sell safe cars</h1>
      </header>
    );
  }
}
