//workshop tracks for the landing page
import React from "react";
import { ReactComponent as AI } from '../../../assets/tracks/ai.svg'
import { ReactComponent as Front } from '../../../assets/tracks/front.svg'
import { ReactComponent as Back } from '../../../assets/tracks/back.svg'
import { ReactComponent as Hardware } from '../../../assets/tracks/hardware.svg'
import { ReactComponent as IT } from '../../../assets/tracks/it.svg'
import { ReactComponent as Game } from '../../../assets/tracks/gaming.svg'
import TrackItem from "../../../components/trackItem";
import data from "../../../config/data/tracks";
import "./styles.css";

const Tracks = () => {

  const getIcon = (id) => {
    switch (id) {
      case "a":
        return <Front />
      case "b":
        return <Back />
      case "c":
        return <Hardware />
      case "d":
        return <AI />
      case "e":
        return <IT />
      case "f":
        return <Game />
      default:

    }
  }
  return (<>
    <section name="tracks">
      <div className="learning-tracks-container">
        <h1 className="landing-section-title">💡 Learning Tracks</h1>
        <p className="landing-section-paragraph">
        Never written a line of code before? Maybe you’ve done some front-end development, 
        but not sure how the back-end works? At ShellHacks, we offer different tracks for 
        you to gain skills in all kinds of technologies!

        </p>
        <br />

        <div className="fish-container fish5">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>

        <div className="fish-container fish6">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>

        <div className="fish-container fish7">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>

        <div className="fish-container fish8">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>


        <div className="fish-container fish3">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>

        <div className="fish-container fish4">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>
        
        <div className="track-items-container">
          {data.map((item, i) => (
            <TrackItem key={i} {...item} icon={getIcon(item.id)} />
          ))}
        </div>
      </div>{" "}
    </section>
    <div className="fish-container fish">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>

    <div className="fish-container fish1">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>

    <div className="fish-container fish2">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>
  </>
  );
};

export default Tracks;
