import React from "react"

import headshot from "../images/headshot_alex.jpg"
import "../styles/app.css"

const Callingcard = props => (
  <div className="container--address">
    <address className="container--address-me">
      <img src={headshot} className="headshot" alt="headshot" />
      <p className="container--address-text">
        Alex Barkin
        <br />
        Linkedin: <a href="https://www.linkedin.com/in/abarkin/">abarkin</a>
        <br />
        Github: <a href="https://github.com/alexbarkin">alexbarkin</a>
        <br />
        Email:{" "}
        <a href="mailto:alex.barkin@edu.uwaterloo.ca">
          alex.barkin@edu.uwaterloo.ca
        </a>
        <br />
      </p>
    </address>
    <iframe
      src="https://snapwidget.com/embed/751863"
      allowtransparency="true"
      frameBorder="0"
      scrolling="no"
      className="instagram"
      title="instagram"
    ></iframe>
  </div>
)

export default Callingcard
