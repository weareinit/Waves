import React from "react";
import { Button, AnimatedWaves } from "../../../components";
import "./styles.css";
const Main = ({ handleRegisterClick, handleMentorClick }) => {
  return (
    <div className="home-container">
      <AnimatedWaves>
        <section name="home" id="home">
          {/* DECORATION */}
          <div className="beach-ball">
            <img src={require(`../../../assets/waves/beachball.svg`)}></img>
          </div>
          <div className="seat-with-towels">
            <img src={require(`../../../assets/waves/seat1.svg`)}></img>
          </div>
          <div className="sandals">
            <img src={require(`../../../assets/waves/sandals.svg`)}></img>
          </div>
          {/* <div className="small_rocks">
            <img src={require(`../../../assets/waves/small_rocks.svg`)}></img>
          </div> */}
          <div className="starfish">
            <img src={require(`../../../assets/waves/starfish.svg`)}></img>
          </div>
          {/*END DECORATION */}
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
                Ernest R. Graham University Center
              </p>
            </div>
            <div className="main-section-buttons-container ">
              <Button
                title="Dashboard"
                action={handleRegisterClick}
                labelStyle="register-button"
              />
              <Button
                title="Mentor"
                action={handleMentorClick}
                labelStyle="register-button"
              />
            </div>
          </div>
        </section>
      </AnimatedWaves>
    </div>
  );
};

export default Main;
