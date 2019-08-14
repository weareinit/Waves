/**
 * Returns a learning track card
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Shell } from '../../assets/waves/shell.svg'

import path from 'path'
import './styles.css'

// returns a track
const TrackItem = ({ title,icon, description, techs }) => {
  return (
    <div className='track-card-container'>
      <h3 className='track-card-item-title'>{title}</h3>
      <div className="track-icon-container">
      {icon}
      </div>
      <p className='track-card-item-description'>{description}</p>
      {/* <div id='tech-detail-container'>
        {techs.map((tech, i) => (
          <div key={i} className='shell-and-info'>
            <Shell className='shell-icon' />
            <p className='tech-detail'>{tech}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}

TrackItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon:PropTypes.isRequired
}

export default TrackItem
