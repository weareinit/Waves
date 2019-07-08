/**
 * Animated wave background
 * ------------------------------
 * @author Jehf K D., Raf (@jehfkemsy , @rslay)
 */

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class AnimatedWaves extends Component {
  render() {
    return (
      <Fragment>
        <div className="wave-background-objects" id="wave-background-objects">
          <div id="shore">
            <div id="wetsand">
              <img
                id="wetsand3"
                className="decor"
                alt="placeholder"
                src={require("../../assets/waves/wetsand3.svg")}
              />
              <img
                id="wetsand2"
                className="decor"
                alt="placeholder"
                src={require("../../assets/waves/wetsand2.svg")}
              />
              <img
                id="wetsand1"
                className="decor"
                alt="placeholder"
                src={require("../../assets/waves/wetsand1.svg")}
              />
            </div>
            <div id="surf">
              <img
                id="surf3"
                className="decor"
                alt="placeholder"
                src={require("../../assets/waves/surf3.svg")}
              />
              <img
                id="surf2"
                className="decor"
                alt="placeholder"
                src={require("../../assets/waves/surf2.svg")}
              />
              {/* <img id="surf1" className="decor" alt="placeholder" src={require('../../assets/waves/surf1.svg')} /> */}
            </div>
          </div>
        </div>
        <div className="wave-background-child"> {this.props.children}</div>
      </Fragment>
    );
  }
}

AnimatedWaves.propTypes = {
  children: PropTypes.element.isRequired
};

export {AnimatedWaves};
