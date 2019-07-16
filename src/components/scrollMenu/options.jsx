/**
 * side "bubble" menu
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
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
      isAtHome: true,
    };
  }

  handleSetActive = args => {
    if (args === this.props.options[0].location)
      this.setState({ isAtHome: true });
    else if (args !== this.props.options[0].location)
      this.setState({ isAtHome: false });
  };

  render() {
    let { options } = this.props;
    return (
      <div
        style={this.state.isAtHome ? { display: "none" } : {}}
        className="menu"
      >
        {options.map(option => (
          <Element title={option.title}>
            <Link
              activeClass="active"
              to={option.location}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <FontAwesomeIcon icon={faCircle} />
            </Link>
          </Element>
        ))}
      </div>
    );
  }
}

export default Options;
