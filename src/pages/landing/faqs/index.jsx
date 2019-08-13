import React, { Component } from "react";
import { Card } from "../../../components";
import "./styles.css";

import faqs from "../../../config/data/faq";

class Faqs extends Component {
  render() {
    return (
      <>
      <section name="faqs">
        <div className="faq-card-container">
          <h1 className="landing-section-title">
          🙋‍♀️ Frequently Asked Questions 
          </h1>
          {faqs.map((card, i) => {
            let props = {
              title: card.title,
              description: card.description,
              styleClassName: "landing-card",
              activeClassName: "active-landing-card",
              i: i
            };
            return <Card key={i} {...props} />;
          })}
        </div>
        
      </section>
      < div className = "submarine-container">
        <img src = {require(`../../../assets/animals/Submarine.svg`)}></img>
      </div>
      </>
    );
  }
}

export default Faqs;
