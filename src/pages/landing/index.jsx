/**
 * Landing page
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy),
 */

import React, { Component } from "react";
import { MLHBadge, ScrollMenu, AnimatedWaves, Footer } from "../../components";
import "./styles.css";

import Schedule from "./schedule";
import Faqs from "./faqs";
import Tracks from "./tracks";
import Supporters from "./supporters";
import Organizers from "./thanks";
import Info from "./info";
import Main from "./main";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleSponsorClick = this.handleSponsorClick.bind(this);
  }
  handleRegisterClick = () => this.props.history.push("/auth");
  handleSponsorClick = () => this.props.history.push("/sponsor");

  render() {
    return (
      <div className="landing-wrapper">
        <MLHBadge />
        <ScrollMenu>
          <AnimatedWaves>
            <Main
              handleSponsorClick={this.handleSponsorClick}
              handleRegisterClick={this.handleRegisterClick}
            />
          </AnimatedWaves>
          <Info />
          <Tracks />
          <Schedule />
          <Faqs />
          <Supporters />
          <Organizers />
        </ScrollMenu>
        <Footer showSocials={false} />
      </div>
    );
  }
}
