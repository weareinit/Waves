import React from "react";
import "./styles.css"
const Info = () => {
  return (
    <section name="about">
      <div className="pink-dolphin">
        <img src={require(`../../../assets/animals/Pink_Dolphin.svg`)}></img>
      </div>

      <div className="blue-dolphin">
        <img src={require(`../../../assets/animals/Blue_Dolphin.svg`)}></img>
      </div>

      <div className="info-section-container">
          <h1 >🌊 The Wave is Here!</h1>
          <p className="landing-section-paragraph">
            ShellHacks is an upcoming 36-hour hackathon at Florida International
            University (FIU), taking place the weekend of Friday, September 20th
            to Sunday 22nd.
            <br />
            <br />
            Our mission is to provide students with the opportunity to learn
            about new technologies, create innovative projects, and share their
            work with the community!
          </p>
        </div>

    </section>
  );
};

export default Info;
