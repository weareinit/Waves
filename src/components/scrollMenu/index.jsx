/**
 * Scroll container with side menu using react-scroll
 * @docs https://www.npmjs.com/package/react-scroll
 */

import React from "react";
import PropTypes from "prop-types";
import Options from "./options";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

//sections  wrapper
class ScrollMenu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    console.log(this.props);
    return (
      <div className="scroll-container">
        <Options options={this.props.options} />
        {this.props.children}
      </div>
    );
  }
}
//type checking
ScrollMenu.propTypes = {
  children: PropTypes.elementType.isRequired
};
export { ScrollMenu };
