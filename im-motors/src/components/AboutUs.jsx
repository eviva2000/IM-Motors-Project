import React, { Component } from "react";
import ContactInfo from "./contactInfo";

import UserContact from "./contactForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-page">
        <p id="description">
          IM Motors is a used car dealership and car repair service with more
          than 10 years’ experience in the market. In IM Motors, our mission is
          to improve everyday lives of people by providing them with reliable
          vehicles and high-quality customer service.
        </p>

        <UserContact />
        <ContactInfo />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.6133721334145!2d-73.14261198505395!3d41.18659927928308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80c540ed85383%3A0x1f19914bf8341e26!2s1574+Stratford+Ave%2C+Stratford%2C+CT+06615%2C+USA!5e0!3m2!1sen!2sdk!4v1559070448677!5m2!1sen!2sdk"
          width="400"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="AdressMap"
        />
      </div>
    );
  }
}
