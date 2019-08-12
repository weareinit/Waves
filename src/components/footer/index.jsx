/**
 * Main site footer
 */

import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="scuba_diver">
            <img src={require("../../assets/waves/scuba_diver.svg")} />
          </div>
          <div>
            <img
              src={require("../../assets//theme/footer/footerBackground.svg")}
            />
          </div>
        </div>
      </>
    );
  }
}

export { Footer };
