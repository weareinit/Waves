/**
 * side "bubble" menu 
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 *
 * FUTURE UPDATE: need to generate options from props array
 */

import React from "react";
import { Link, Element } from "react-scroll";
import { faCircle } from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAtHome: true
    };
  }

  handleSetActive = args => {
    if (args === "home") this.setState({ isAtHome: true });
    else if (args !== "home") this.setState({ isAtHome: false });
  };

  render() {
    return (
      <div
        style={this.state.isAtHome ? { display: "none" } : {}}
        className="menu"
      >
        <Element title="Home">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="About Us">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="Learning Tracks">
          <Link
            activeClass="active"
            to="tracks"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="Tentative Schedule">
          <Link
            activeClass="active"
            to="schedule"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="FAQs">
          <Link
            activeClass="active"
            to="faqs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="Sponsors">
          <Link
            activeClass="active"
            to="sponsors"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
        <Element title="Thanks &hearts;">
          <Link
            activeClass="active"
            to="organizers"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon icon={faCircle} />
          </Link>
        </Element>
      </div>
    );
  }
}

export default Options;
