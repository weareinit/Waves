//workshop tracks for the landing page
import React from "react";
import TrackItem from "../../../components/trackItem";
import data from "../../../config/data/tracks";
import "./styles.css";

const Tracks = () => {
  return (
    <section name="tracks">
      <div className="learning-tracks-container">
        <h1 className="landing-section-title">Learning tracks</h1>
        <p className="landing-section-paragraph">
          Sometimes the process of learning can get overwhelming. There’s so
          much to learn, and not enough time to devote to really diving in. When
          I get in a situation where I feel like giving up, or like I’ll never
          be able to learn what I want to learn in the time I have, it can help
          to turn to some outside inspiration.
        </p>
        <div className="track-items-container">
          {data.map((item, i) => (
            <TrackItem key={i} {...item} />
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Tracks;
