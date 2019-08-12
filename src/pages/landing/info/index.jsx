import React from "react";
import "./styles.css"
const Info = () => {
  return (
    <section name="about" className="about-container">
      <div className="pink-dolphin">
        <img src={require(`../../../assets/animals/Pink_Dolphin.svg`)}></img>
      </div>

      <div className="blue-dolphin">
        <img src={require(`../../../assets/animals/Blue_Dolphin.svg`)}></img>
      </div>

      <div className="info-section-container">
          <h1  className="landing-section-title">🌊 The Wave is Here!</h1>
          <p className="landing-section-paragraph">
          Get ready for a weekend full of learning, innovation, and fun at ShellHacks, 
          Florida’s Largest Hackathon! Take a dive with us as 1,000 students from across 
          the nation come to learn about the latest technologies, build innovative projects, 
          and showcase their work. 
            <br />
            <br />
            Explore the world of technology through interactive workshops, receive mentorship 
            from amazing mentors, and network with top companies. Featuring fun activities, 
            delicious meals, awesome prizes, and tons of swag, this is a wave you won’t want to miss!

          </p>
        </div>

    </section>
  );
};

export default Info;
