import React, { Component } from "react";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";
import HomeFilter from "./filter/HomeFilter";
import Categories from "./Categories";
import TeenagerOffers from "./TeenagerOffers";
import LandingPFooter from "./landingPFooter";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home">
          <Membership />
          <TeenagerOffers />
          <Categories />
          <HomeFilter />
          <Reviews />
          <LandingPFooter />
        </div>
        <div className="copyright">
          <p>Copyright © IM Motors 2019. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
