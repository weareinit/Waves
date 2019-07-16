/**
 * Landing page
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy), ....
 */

import React, { Component, Fragment } from "react";
import { MLHBadge, ScrollMenu, Footer } from "../../components";
import "./styles.css";

import Schedule from "./schedule";
import Faqs from "./faqs";
import Tracks from "./tracks";
import Supporters from "./supporters";
import Organizers from "./thanks";
import Info from "./info";
import Main from "./main";

export default class Landing extends Component {
  handleRegisterClick = () => this.props.history.push("/auth");
  handleSponsorClick = () => this.props.history.push("/sponsor");

  render() {
    return (
      <div className="landing-wrapper">
        <MLHBadge />
        <ScrollMenu>
          <div className = "scroll">
            <Main
              handleSponsorClick={this.handleSponsorClick}
              handleRegisterClick={this.handleRegisterClick}
            />
            <div className="landing-gradient">
              <Info />
              <Tracks />
              <Schedule />
              <Faqs />
              <Supporters />
              <Organizers />
              <Footer showSocials={false} />
            </div>
          </div>
        </ScrollMenu>
      </div>
    );
  }
}
