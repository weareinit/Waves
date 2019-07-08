import React from "react";
import { Button } from "../../../components";
import "./styles.css";
const Main = ({ handleRegisterClick, handleSponsorClick }) => {
  return (
    <section name="home">
      <div className="main-section-container">
        <div className="main-section-details-container">
          <img
            className="main-section-details-logo"
            alt="ShellHacks Wordmark"
            src={require("../../../assets/logos/organizers/shellhacks.svg")}
          />
          <h1 id="slogan">Florida's Largest Hackathon</h1>
          <p className="main-section-details-specifics">
            September 20-22, 2019
            <br />
            Florida International University
            <br />
            Ocean Bank Convention Center
          </p>
        </div>
        <div className="main-section-buttons-container ">
          <Button title="SPONSOR" action={handleSponsorClick} />
          <Button title="REGISTER" action={handleRegisterClick} />
        </div>
      </div>
    </section>
  );
};

export default Main;
