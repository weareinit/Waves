import React, { Component } from "react";
import { AnimatedWaves } from '../../components/animatedWaves'
import './styles.css'
class Live extends Component {

    render() {
        return (<div>
            <AnimatedWaves>
                <div className="live-container">

                    <div className="messages-container">
                        <div>
                            <img className="main-section-details-logo" alt="ShellHacks Wordmark" src={require("../../assets/logos/organizers/shellhacks.svg")} />
                            <h1>Live Page</h1>
                            <h2>Live message array goes here</h2>
                            {/* <LiveMessage/> */}

                        </div>
                        <div className='music-player-section'>
                            <iframe src="https://open.spotify.com/playlist/74sUjcvpGfdOvCHvgzNEDO?si=3vNkJ5PhTMmNlllfjB9Z7w"
                                width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="schedule-continer">
                        <h2>Schedule:</h2>
                    </div>

                </div>
            </AnimatedWaves>
        </div>
        );
    }
}

export default Live;