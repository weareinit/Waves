//workshop tracks for the landing page
import React from "react";
import { ReactComponent as AI } from '../../../assets/tracks/ai.svg'
import { ReactComponent as Front } from '../../../assets/tracks/front.svg'
import { ReactComponent as Back } from '../../../assets/tracks/back.svg'
import { ReactComponent as Hardware } from '../../../assets/tracks/hardware.svg'
import { ReactComponent as IT } from '../../../assets/tracks/it.svg'
import TrackItem from "../../../components/trackItem";
import data from "../../../config/data/tracks";
import "./styles.css";

const Tracks = () => {

  const getIcon=(id)=>{
    switch (id) {
    case "a":
        return <Front/>
    case "b":
        return <Back/>
    case "c":
        return <Hardware/>
    case "d":
        return <AI/>
    case "e":
        return <IT/>
    default:

  }}
  return (
    <section name="tracks">
      <div className="learning-tracks-container">
        <h1 className="landing-section-title">💡 Learning Tracks</h1>
        <p className="landing-section-paragraph">
          Sometimes the process of learning can get overwhelming. There’s so
          much to learn, and not enough time to devote to really diving in. When
          I get in a situation where I feel like giving up, or like I’ll never
          be able to learn what I want to learn in the time I have, it can help
          to turn to some outside inspiration.
        </p>
        <div className="track-items-container">
          {data.map((item, i) => (
            <TrackItem key={i} {...item} icon={getIcon(item.id)} />
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Tracks;
