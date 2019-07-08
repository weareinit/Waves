import React, { Component } from "react";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

class Organizers extends Component {
  render() {
    return (
      <section name="organizers">
        <div className="thanks-conatainer">
          <h1 className="landing-section-title">
            Thank you for &#10084; ShellHacks!
          </h1>
        </div>
        <div className="sites-container">
          <a
            href="https://2017.shellhacks.net"
            rel="noopener noreferrer"
            target="_blank"
            className="submit-button landing-button-wrapper"
          >
            <p> 2017 Site</p>
          </a>
          <a
            href="https://2018.shellhacks.net"
            rel="noopener noreferrer"
            target="_blank"
            className="submit-button landing-button-wrapper"
          >
            <p>2018 Site</p>
          </a>
          <a
            href="https://stocksnap.io/"
            rel="noopener noreferrer"
            target="_blank"
            className="submit-button landing-button-wrapper"
          >
            <p> Wallpapers</p>
          </a>
        </div>
        <div className="social-media-container">
          <a href="http://upe.cs.fiu.edu">
            <FontAwesomeIcon icon={faDiscord} size="4x" />
          </a>
          <a href="http://upe.cs.fiu.edu">
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
          <a href="http://upe.cs.fiu.edu">
            <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
          </a>
          <a href="http://upe.cs.fiu.edu">
            <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
          </a>
          <a href="http://upe.cs.fiu.edu">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>
      </section>
    );
  }
}
export default Organizers;
