/**
 * returns a learning track card
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Shell } from "../../assets/waves/shell.svg";
import "./styles.css"

//returns a track
const TrackItem = ({title, identifierPath, description, techs}) => {
  return (
    <div className="track-card-container">
      <h3 className="track-card-item-title">{title}</h3>
      <img className="track-icon" alt="track" src={identifierPath} />
      <p className="track-card-item-description">{description}</p>
      <div id="tech-detail-container">
        {techs.map((tech, i) => (
          <div key={i} className="shell-and-info">
            <Shell className="shell-icon" />
            <p className="tech-detail">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  title: PropTypes.string.isRequired,
  identifierPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired
};

export default TrackItem;
