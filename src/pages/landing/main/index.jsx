import React from "react";
import { Button, AnimatedWaves } from "../../../components";
import "./styles.css";
const Main = ({ handleRegisterClick}) => {
  return (
    <section name="home" id="home">
      <AnimatedWaves>
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
              {/* <br />
              Kovens Conference Center */}
            </p>
          </div>
          <div className="main-section-buttons-container ">
            <Button title="Register Now!" action={handleRegisterClick} labelStyle="register-button" strong/>
          </div>
        </div>
      </AnimatedWaves>
    </section>
  );
};

export default Main;
